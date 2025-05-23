/**
 * @fileoverview gRPC-Web generated client stub for protobuf
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.24.4
// source: Services.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as Message2Server_pb from './Message2Server_pb';
import * as Message2Clients_pb from './Message2Clients_pb';


export class AvailableServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorTryConnection = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/TryConnection',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.IDMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.IDMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  tryConnection(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  tryConnection(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  tryConnection(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/TryConnection',
        request,
        metadata || {},
        this.methodDescriptorTryConnection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/TryConnection',
    request,
    metadata || {},
    this.methodDescriptorTryConnection);
  }

  methodDescriptorAddCharacter = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/AddCharacter',
    grpcWeb.MethodType.SERVER_STREAMING,
    Message2Server_pb.CharacterMsg,
    Message2Clients_pb.MessageToClient,
    (request: Message2Server_pb.CharacterMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.MessageToClient.deserializeBinary
  );

  addCharacter(
    request: Message2Server_pb.CharacterMsg,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<Message2Clients_pb.MessageToClient> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/protobuf.AvailableService/AddCharacter',
      request,
      metadata || {},
      this.methodDescriptorAddCharacter);
  }

  methodDescriptorGetMap = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/GetMap',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.NullRequest,
    Message2Clients_pb.MessageOfMap,
    (request: Message2Server_pb.NullRequest) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.MessageOfMap.deserializeBinary
  );

  getMap(
    request: Message2Server_pb.NullRequest,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.MessageOfMap>;

  getMap(
    request: Message2Server_pb.NullRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.MessageOfMap) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.MessageOfMap>;

  getMap(
    request: Message2Server_pb.NullRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.MessageOfMap) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/GetMap',
        request,
        metadata || {},
        this.methodDescriptorGetMap,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/GetMap',
    request,
    metadata || {},
    this.methodDescriptorGetMap);
  }

  methodDescriptorMove = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Move',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.MoveMsg,
    Message2Clients_pb.MoveRes,
    (request: Message2Server_pb.MoveMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.MoveRes.deserializeBinary
  );

  move(
    request: Message2Server_pb.MoveMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.MoveRes>;

  move(
    request: Message2Server_pb.MoveMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.MoveRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.MoveRes>;

  move(
    request: Message2Server_pb.MoveMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.MoveRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Move',
        request,
        metadata || {},
        this.methodDescriptorMove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Move',
    request,
    metadata || {},
    this.methodDescriptorMove);
  }

  methodDescriptorRecover = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Recover',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.RecoverMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.RecoverMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  recover(
    request: Message2Server_pb.RecoverMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  recover(
    request: Message2Server_pb.RecoverMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  recover(
    request: Message2Server_pb.RecoverMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Recover',
        request,
        metadata || {},
        this.methodDescriptorRecover,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Recover',
    request,
    metadata || {},
    this.methodDescriptorRecover);
  }

  methodDescriptorProduce = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Produce',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.IDMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.IDMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  produce(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  produce(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  produce(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Produce',
        request,
        metadata || {},
        this.methodDescriptorProduce,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Produce',
    request,
    metadata || {},
    this.methodDescriptorProduce);
  }

  methodDescriptorRebuild = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Rebuild',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.ConstructMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.ConstructMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  rebuild(
    request: Message2Server_pb.ConstructMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  rebuild(
    request: Message2Server_pb.ConstructMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  rebuild(
    request: Message2Server_pb.ConstructMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Rebuild',
        request,
        metadata || {},
        this.methodDescriptorRebuild,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Rebuild',
    request,
    metadata || {},
    this.methodDescriptorRebuild);
  }

  methodDescriptorConstruct = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Construct',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.ConstructMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.ConstructMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  construct(
    request: Message2Server_pb.ConstructMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  construct(
    request: Message2Server_pb.ConstructMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  construct(
    request: Message2Server_pb.ConstructMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Construct',
        request,
        metadata || {},
        this.methodDescriptorConstruct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Construct',
    request,
    metadata || {},
    this.methodDescriptorConstruct);
  }

  methodDescriptorConstructTrap = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/ConstructTrap',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.ConstructTrapMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.ConstructTrapMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  constructTrap(
    request: Message2Server_pb.ConstructTrapMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  constructTrap(
    request: Message2Server_pb.ConstructTrapMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  constructTrap(
    request: Message2Server_pb.ConstructTrapMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/ConstructTrap',
        request,
        metadata || {},
        this.methodDescriptorConstructTrap,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/ConstructTrap',
    request,
    metadata || {},
    this.methodDescriptorConstructTrap);
  }

  methodDescriptorEquip = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Equip',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.EquipMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.EquipMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  equip(
    request: Message2Server_pb.EquipMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  equip(
    request: Message2Server_pb.EquipMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  equip(
    request: Message2Server_pb.EquipMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Equip',
        request,
        metadata || {},
        this.methodDescriptorEquip,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Equip',
    request,
    metadata || {},
    this.methodDescriptorEquip);
  }

  methodDescriptorAttack = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Attack',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.AttackMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.AttackMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  attack(
    request: Message2Server_pb.AttackMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  attack(
    request: Message2Server_pb.AttackMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  attack(
    request: Message2Server_pb.AttackMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Attack',
        request,
        metadata || {},
        this.methodDescriptorAttack,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Attack',
    request,
    metadata || {},
    this.methodDescriptorAttack);
  }

  methodDescriptorCast = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Cast',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.CastMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.CastMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  cast(
    request: Message2Server_pb.CastMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  cast(
    request: Message2Server_pb.CastMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  cast(
    request: Message2Server_pb.CastMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Cast',
        request,
        metadata || {},
        this.methodDescriptorCast,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Cast',
    request,
    metadata || {},
    this.methodDescriptorCast);
  }

  methodDescriptorAttackConstruction = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/AttackConstruction',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.AttackConstructionMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.AttackConstructionMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  attackConstruction(
    request: Message2Server_pb.AttackConstructionMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  attackConstruction(
    request: Message2Server_pb.AttackConstructionMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  attackConstruction(
    request: Message2Server_pb.AttackConstructionMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/AttackConstruction',
        request,
        metadata || {},
        this.methodDescriptorAttackConstruction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/AttackConstruction',
    request,
    metadata || {},
    this.methodDescriptorAttackConstruction);
  }

  methodDescriptorAttackAdditionResource = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/AttackAdditionResource',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.AttackAdditionResourceMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.AttackAdditionResourceMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  attackAdditionResource(
    request: Message2Server_pb.AttackAdditionResourceMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  attackAdditionResource(
    request: Message2Server_pb.AttackAdditionResourceMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  attackAdditionResource(
    request: Message2Server_pb.AttackAdditionResourceMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/AttackAdditionResource',
        request,
        metadata || {},
        this.methodDescriptorAttackAdditionResource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/AttackAdditionResource',
    request,
    metadata || {},
    this.methodDescriptorAttackAdditionResource);
  }

  methodDescriptorSend = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/Send',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.SendMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.SendMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  send(
    request: Message2Server_pb.SendMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  send(
    request: Message2Server_pb.SendMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  send(
    request: Message2Server_pb.SendMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/Send',
        request,
        metadata || {},
        this.methodDescriptorSend,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/Send',
    request,
    metadata || {},
    this.methodDescriptorSend);
  }

  methodDescriptorCreatCharacter = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/CreatCharacter',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.CreatCharacterMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.CreatCharacterMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  creatCharacter(
    request: Message2Server_pb.CreatCharacterMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  creatCharacter(
    request: Message2Server_pb.CreatCharacterMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  creatCharacter(
    request: Message2Server_pb.CreatCharacterMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/CreatCharacter',
        request,
        metadata || {},
        this.methodDescriptorCreatCharacter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/CreatCharacter',
    request,
    metadata || {},
    this.methodDescriptorCreatCharacter);
  }

  methodDescriptorCreatCharacterRID = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/CreatCharacterRID',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.CreatCharacterMsg,
    Message2Clients_pb.CreatCharacterRes,
    (request: Message2Server_pb.CreatCharacterMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.CreatCharacterRes.deserializeBinary
  );

  creatCharacterRID(
    request: Message2Server_pb.CreatCharacterMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.CreatCharacterRes>;

  creatCharacterRID(
    request: Message2Server_pb.CreatCharacterMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.CreatCharacterRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.CreatCharacterRes>;

  creatCharacterRID(
    request: Message2Server_pb.CreatCharacterMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.CreatCharacterRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/CreatCharacterRID',
        request,
        metadata || {},
        this.methodDescriptorCreatCharacterRID,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/CreatCharacterRID',
    request,
    metadata || {},
    this.methodDescriptorCreatCharacterRID);
  }

  methodDescriptorEndAllAction = new grpcWeb.MethodDescriptor(
    '/protobuf.AvailableService/EndAllAction',
    grpcWeb.MethodType.UNARY,
    Message2Server_pb.IDMsg,
    Message2Clients_pb.BoolRes,
    (request: Message2Server_pb.IDMsg) => {
      return request.serializeBinary();
    },
    Message2Clients_pb.BoolRes.deserializeBinary
  );

  endAllAction(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null): Promise<Message2Clients_pb.BoolRes>;

  endAllAction(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void): grpcWeb.ClientReadableStream<Message2Clients_pb.BoolRes>;

  endAllAction(
    request: Message2Server_pb.IDMsg,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: Message2Clients_pb.BoolRes) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/protobuf.AvailableService/EndAllAction',
        request,
        metadata || {},
        this.methodDescriptorEndAllAction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/protobuf.AvailableService/EndAllAction',
    request,
    metadata || {},
    this.methodDescriptorEndAllAction);
  }

}

