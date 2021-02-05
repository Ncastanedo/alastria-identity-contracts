/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EidasInterface extends ethers.utils.Interface {
  functions: {
    "atLeast(uint8,uint8)": FunctionFragment;
    "atLeastLow(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "atLeast",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "atLeastLow",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "atLeast", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "atLeastLow", data: BytesLike): Result;

  events: {};
}

export class Eidas extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EidasInterface;

  functions: {
    atLeast(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "atLeast(uint8,uint8)"(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    atLeastLow(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "atLeastLow(uint8)"(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  atLeast(
    _eidasLevel: BigNumberish,
    _level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "atLeast(uint8,uint8)"(
    _eidasLevel: BigNumberish,
    _level: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  atLeastLow(
    _eidasLevel: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "atLeastLow(uint8)"(
    _eidasLevel: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    atLeast(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "atLeast(uint8,uint8)"(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    atLeastLow(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "atLeastLow(uint8)"(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    atLeast(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "atLeast(uint8,uint8)"(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    atLeastLow(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "atLeastLow(uint8)"(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    atLeast(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "atLeast(uint8,uint8)"(
      _eidasLevel: BigNumberish,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    atLeastLow(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "atLeastLow(uint8)"(
      _eidasLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}