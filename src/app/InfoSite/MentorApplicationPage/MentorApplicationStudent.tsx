import { PageProps } from "../..";
import { Space, message, Row, Col } from "antd";
import MentorListCard from "./Cards/MentorListCard";
import StudentApplicationCard from "./Cards/StudentApplicationCard";
import ScheduleCard from "./Cards/ScheduleCard";
import { useState, useEffect } from "react";
import { IMentor, IApplication, ISchedule, IFreshman } from "./Interface";
import StudentInfoCard from "./Cards/StudentInfoCard";
import axios from "axios";

const MentorApplicationStudent: React.FC<PageProps> = ({ mode, user }) => {
  const [applications, setApplications] = useState<IApplication[]>([]); // 本学生的申请列表
  const [mentors, setMentors] = useState<IMentor[]>([]); // 所有导师列表
  const [schedule, setSchedule] = useState<ISchedule | undefined>(undefined); // 申请时间表
  const [freshmen, setFreshmen] = useState<IFreshman[]>([]); // 所有新生列表

  const fetchApplications = async () => {
    try {
      const res = await axios.get(`/application/info/mentor/applications`);
      if (res.status !== 200) {
        throw new Error();
      }
      setApplications(res.data);
    } catch (err) {
      message.error("信息获取失败");
    }
  };

  const fetchMentors = async () => {
    try {
      const res = await axios.get(`/application/info/mentor/mentor_list`);
      if (res.status !== 200) {
        throw new Error();
      }
      setMentors(res.data);
    } catch (err) {
      message.error("信息获取失败");
    }
  };

  const fetchSchedule = async () => {
    try {
      const res = await axios.get(`/application/info/mentor/schedule`);
      if (res.status !== 200) {
        throw new Error();
      }
      setSchedule(res.data);
    } catch (err) {
      message.error("信息获取失败");
    }
  };

  const fetchFreshmen = async () => {
    try {
      const res = await axios.get(`/application/info/mentor/freshmen`);
      if (res.status !== 200) {
        throw new Error();
      }
      setFreshmen(res.data);
    } catch (err) {
      message.error("信息获取失败");
    }
  };

  const updateApplicationCallback = async () => {
    await fetchApplications();
    await fetchMentors();
  };

  useEffect(() => {
    fetchApplications();
    fetchMentors();
    fetchSchedule();
    fetchFreshmen();
  }, []);

  return (
    <Space
      direction="vertical"
      css={`
        width: 100%;
      `}
    >
      <Row>
        <Col style={{ width: "65%" }}>
          <Row>
            <Col style={{ width: "100%" }}>
              {freshmen && (
                <StudentInfoCard freshmen={freshmen} user={user} mode={mode} />
              )}
            </Col>
          </Row>
          <Row style={{ marginTop: "5%" }}>
            <Col style={{ width: "100%" }}>
              {schedule && (
                <StudentApplicationCard
                  applications={applications}
                  schedule={schedule}
                  freshmen={freshmen}
                  callback={updateApplicationCallback}
                  user={user}
                  mode={mode}
                />
              )}
            </Col>
          </Row>
        </Col>
        <Col style={{ width: "30%", marginLeft: "5%" }}>
          {schedule && (
            <ScheduleCard schedule={schedule} user={user} mode={mode} />
          )}
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col style={{ width: "100%" }}>
          {schedule && (
            <MentorListCard
              applications={applications}
              mentors={mentors}
              schedule={schedule}
              freshmen={freshmen}
              callback={updateApplicationCallback}
              user={user}
              mode={mode}
            />
          )}
        </Col>
      </Row>
    </Space>
  );
};

export default MentorApplicationStudent;
