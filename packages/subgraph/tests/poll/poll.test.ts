/* eslint-disable no-underscore-dangle */
import { BigInt } from "@graphprotocol/graph-ts";
import { test, describe, afterEach, clearStore, assert, beforeEach } from "matchstick-as";

import { MACI, Poll } from "../../generated/schema";
import { handleDeployPoll } from "../../src/maci";
import {
  handleMergeMaciState,
  handleMergeMessageAq,
  handleMergeMessageAqSubRoots,
  handlePublishMessage,
  handleSetRegistry,
  handleInitPoll,
} from "../../src/poll";
import { DEFAULT_POLL_ADDRESS, DEFAULT_REGISTRY_ADDRESS, mockMaciContract, mockPollContract } from "../common";
import { createDeployPollEvent } from "../maci/utils";

import {
  createMergeMaciStateEvent,
  createMergeMessageAqEvent,
  createMergeMessageAqSubRootsEvent,
  createPublishMessageEvent,
  createSetRegistryEvent,
  createInitPollCall,
} from "./utils";

export {
  handleMergeMaciState,
  handleMergeMessageAq,
  handleMergeMessageAqSubRoots,
  handlePublishMessage,
  handleSetRegistry,
  handleInitPoll,
};

describe("Poll", () => {
  beforeEach(() => {
    mockMaciContract();
    mockPollContract();

    // mock the deploy poll event with non qv mode set
    const event = createDeployPollEvent(BigInt.fromI32(1), BigInt.fromI32(1), BigInt.fromI32(1), BigInt.fromI32(1));

    handleDeployPoll(event);
  });

  afterEach(() => {
    clearStore();
  });

  test("should handle merge maci state properly", () => {
    const call = createInitPollCall(DEFAULT_POLL_ADDRESS);

    handleInitPoll(call);

    const poll = Poll.load(call.to)!;

    assert.fieldEquals("Poll", poll.id.toHex(), "initTime", call.block.timestamp.toString());
  });

  test("should handle poll initialization properly", () => {
    const event = createMergeMaciStateEvent(DEFAULT_POLL_ADDRESS, BigInt.fromI32(1), BigInt.fromI32(3));

    handleMergeMaciState(event);

    const poll = Poll.load(event.address)!;
    const maci = MACI.load(poll.maci)!;

    assert.fieldEquals("Poll", poll.id.toHex(), "stateRoot", "1");
    assert.fieldEquals("Poll", poll.id.toHex(), "numSignups", "3");
    assert.fieldEquals("MACI", maci.id.toHexString(), "numPoll", "1");
    assert.fieldEquals("MACI", maci.id.toHexString(), "numSignUps", "3");
    assert.fieldEquals("MACI", maci.id.toHexString(), "latestPoll", poll.id.toHex());
    assert.assertTrue(maci.polls.load().length === 1);
  });

  test("should handle merge message queue properly", () => {
    const event = createMergeMessageAqEvent(DEFAULT_POLL_ADDRESS, BigInt.fromI32(1));

    handleMergeMessageAq(event);

    const poll = Poll.load(DEFAULT_POLL_ADDRESS)!;

    assert.fieldEquals("Poll", poll.id.toHex(), "messageRoot", "1");
  });

  test("should handle merge message queue subroots properly", () => {
    const event = createMergeMessageAqSubRootsEvent(DEFAULT_POLL_ADDRESS, BigInt.fromI32(1));

    handleMergeMessageAqSubRoots(event);

    const poll = Poll.load(event.address)!;

    assert.fieldEquals("Poll", poll.id.toHex(), "numSrQueueOps", "1");
  });

  test("should handle publish message properly", () => {
    const event = createPublishMessageEvent(
      DEFAULT_POLL_ADDRESS,
      [
        BigInt.fromI32(0),
        BigInt.fromI32(1),
        BigInt.fromI32(2),
        BigInt.fromI32(3),
        BigInt.fromI32(4),
        BigInt.fromI32(5),
        BigInt.fromI32(6),
        BigInt.fromI32(7),
        BigInt.fromI32(8),
        BigInt.fromI32(9),
      ],
      BigInt.fromI32(2),
      BigInt.fromI32(3),
    );

    handlePublishMessage(event);

    const poll = Poll.load(event.address)!;

    assert.entityCount("Vote", 1);
    assert.fieldEquals("Poll", poll.id.toHex(), "numMessages", "1");
  });

  test("should handle setting registry properly", () => {
    const event = createSetRegistryEvent(DEFAULT_POLL_ADDRESS, DEFAULT_REGISTRY_ADDRESS);

    handleSetRegistry(event);

    const poll = Poll.load(event.address)!;

    assert.fieldEquals("Registry", DEFAULT_REGISTRY_ADDRESS.toHex(), "id", DEFAULT_REGISTRY_ADDRESS.toHex());
    assert.fieldEquals("Poll", poll.id.toHex(), "registry", DEFAULT_REGISTRY_ADDRESS.toHex());
  });
});
