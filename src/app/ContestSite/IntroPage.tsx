import { useState, useEffect, useCallback } from "react";
import { Card, Col, Row, Space, Statistic, Timeline, message } from "antd";
import { FireOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useUrl } from "../../api/hooks/url";
import Markdown from "react-markdown";
import * as graphql from "@/generated/graphql";
import { ContestProps } from ".";
import dayjs from "dayjs";
import axios from "axios";

const { Countdown } = Statistic;

/* ---------------- 主页面 ---------------- */
const IntroPage: React.FC<ContestProps> = ({ mode, user }) => {
  /* ---------------- States 和常量 Hooks ---------------- */
  const url = useUrl();
  const Contest_id = url.query.get("contest");
  /* ---------------- 从数据库获取数据的 Hooks ---------------- */
  const { data: contestInfoData, error: contestInfoError } =
    graphql.useGetContestInfoSuspenseQuery({
      variables: {
        contest_id: Contest_id,
      },
    });
  const { data: totalTeamNumData } = graphql.useGetTotalTeamNumSuspenseQuery({
    variables: {
      contest_id: Contest_id,
    },
  });
  //const getTeamMemberLimitData = async () => {
  //  const response = axios.post("/team/member_limit", {
  //    contest_id: Contest_id
  //  });
  //  const res = await response;
  //  return res.data.limit;
  //};
  const getTeamMemberLimitData = useCallback(async () => {
    if (!Contest_id) return; // 防止 Contest_id 不存在时发出请求
    try {
      const response = await axios.post("/team/member_limit", {
        contest_id: Contest_id,
      });
      return response.data.limit;
    } catch (error) {
      console.error("Failed to fetch team member limit:", error);
      message.error("获取队伍人数限制失败");
      return 0; // 出错时返回默认值
    }
  }, [Contest_id]); // 依赖项是 Contest_id
  // dont use graphql
  const [teamMemberLimitData, setTeamMemberLimitData] = useState<number>(0);
  const { data: totalMemberNumData } =
    graphql.useGetTotalMemberNumSuspenseQuery({
      variables: {
        contest_id: Contest_id,
      },
    });

  const { data: CountdownData } = graphql.useGetContestTimesSuspenseQuery({
    variables: {
      contest_id: Contest_id,
    },
  });
  const contestTimes = CountdownData?.contest_time || [];

  /* ---------------- useEffect ---------------- */
  // 3. 你的 useEffect 现在是稳定和正确的
  useEffect(() => {
    getTeamMemberLimitData().then((limit) => {
      if (limit !== undefined) {
        setTeamMemberLimitData(limit);
      }
    });
  }, [getTeamMemberLimitData]); // 依赖于稳定版的函数
  useEffect(() => {
    if (contestInfoError) {
      message.error("简介加载失败");
    }
  }, [contestInfoError]);
  const [now] = useState(dayjs());
  const contestEnd = contestInfoData?.contest_by_pk?.end_date
    ? dayjs(contestInfoData.contest_by_pk.end_date)
    : null;

  const registrationEvent = contestTimes.find((event) =>
    event.event.includes("开始报名"),
  );
  const semiEvent = contestTimes.find((event) => event.event.includes("复赛"));
  const finalEvent = contestTimes.find((event) => event.event.includes("决赛"));
  const registrationStart = registrationEvent
    ? dayjs(registrationEvent.start)
    : null;
  const registrationEnd = registrationEvent
    ? dayjs(registrationEvent.end)
    : null;
  const semiStart = semiEvent ? dayjs(semiEvent.start) : null;
  const finalStart = finalEvent ? dayjs(finalEvent.start) : null;

  let targetTime: dayjs.Dayjs | null = null;
  let countdownTitle = "";

  if (registrationStart && now.isBefore(registrationStart)) {
    targetTime = registrationStart;
    countdownTitle = "距离报名开始还有";
  } else if (registrationEnd && now.isBefore(registrationEnd)) {
    targetTime = registrationEnd;
    countdownTitle = "距离报名结束还有";
  } else if (semiStart && now.isBefore(semiStart)) {
    targetTime = semiStart;
    countdownTitle = "距离复赛开始还有";
  } else if (finalStart && now.isBefore(finalStart)) {
    targetTime = finalStart;
    countdownTitle = "距离决赛开始还有";
  } else if (contestEnd && now.isBefore(contestEnd)) {
    targetTime = contestEnd;
    countdownTitle = "距离比赛结束还有";
  } else {
    countdownTitle = "比赛已结束";
  }

  /* ---------------- 页面组件 ---------------- */
  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        display: "flex",
        border: "0px solid #ccc",
        padding: "4vh 4vw",
        color: mode === "dark" ? "white" : "initial",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
        <Col span={8}>
          <Card hoverable bordered={false}>
            <Statistic
              title="已报名"
              value={
                totalMemberNumData?.contest_team_member_aggregate?.aggregate
                  ?.count || 0
              }
              valueStyle={{ color: "#cf1322" }}
              prefix={<FireOutlined />}
              suffix="人"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable bordered={false}>
            <Statistic
              title="共组成了"
              value={
                totalTeamNumData?.contest_team_aggregate?.aggregate?.count || 0
              }
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="支队伍"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable bordered={false}>
            {targetTime ? (
              <Countdown
                title={countdownTitle}
                value={targetTime.valueOf()}
                format="D 天 H 时 m 分"
              />
            ) : (
              <span>{countdownTitle}</span>
            )}
          </Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
        <Col span={16}>
          <Card hoverable bordered={false}>
            <Markdown>{contestInfoData?.contest_by_pk?.description}</Markdown>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable bordered={false}>
            <Timeline
              items={contestTimes.map((contestTime, index) => {
                // 检查比赛结束时间是否已经过去
                const isCurrentEvent =
                  dayjs().isAfter(dayjs(contestTime.start)) &&
                  dayjs().isBefore(dayjs(contestTime.end));
                const isPastEvent = dayjs().isAfter(dayjs(contestTime.end));

                return {
                  color: isCurrentEvent
                    ? "green"
                    : isPastEvent
                      ? "grey"
                      : "blue", // 如果比赛已经结束，设置颜色为灰色，否则为蓝色
                  children: (
                    <>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "larger",
                          color: isPastEvent ? "grey" : "inherit",
                        }}
                      >
                        {contestTime.event}
                      </p>
                      <p style={{ color: isPastEvent ? "grey" : "inherit" }}>
                        {dayjs(contestTime.start).format("YYYY-MM-DD")} ~{" "}
                        {dayjs(contestTime.end).format("YYYY-MM-DD")}
                      </p>
                      <p style={{ color: isPastEvent ? "grey" : "inherit" }}>
                        {contestTime.description && (
                          <a
                            href={contestTime.description}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {contestTime.description}
                          </a>
                        )}
                      </p>
                    </>
                  ),
                };
              })}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }} wrap={true}>
        <Col span={8}>
          <Card hoverable bordered={false}>
            <Statistic
              title="人数限制"
              value={teamMemberLimitData === 0 ? "无限制" : teamMemberLimitData}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="人/队"
            />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default IntroPage;
