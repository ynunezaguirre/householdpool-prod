import { BigInt } from "@graphprotocol/graph-ts"
import {
  RepaymentMade,
  DepositMade,
  DrawdownMade,
  MortgageStartMade,
  WithdrawNFTMade,
} from "../generated/HouseHoldPool/HouseHoldPool"
import {
  RepaymentMade as Repayment,
  DepositMade as Deposit,
  DrawdownMade as Drawdown,
  MortgageStartMade as MortgageStart,
  WithdrawNFTMade as WithdrawNFT,
} from "../generated/schema"

export function handleRepaymentMade(event: RepaymentMade): void {
  let entity = Repayment.load(event.transaction.hash.toHex());
  if (!entity) {
    entity = new Repayment(event.transaction.hash.toHex());
  }
  entity.mortgage = event.params.mortgage;
  entity.clientId = event.params.clientId;
  entity.amount = event.params.amount;
  entity.datetime = event.block.timestamp;
  entity.save();
}

export function handleDepositMade(event: DepositMade): void {
  let entity = Deposit.load(event.transaction.hash.toHex());
  if (!entity) {
    entity = new Deposit(event.transaction.hash.toHex());
  }
  entity.owner = event.params.origin;
  entity.contract = event.params.to;
  entity.tokenId = event.params.tokenId;
  entity.amount = event.params.amount;
  entity.period = event.params.period;
  entity.rate = event.params.rate;
  entity.datetime = event.block.timestamp;
  entity.save();
}

export function handleDrawdownMade(event: DrawdownMade): void {
  let entity = Drawdown.load(event.transaction.hash.toHex());
  if (!entity) {
    entity = new Drawdown(event.transaction.hash.toHex());
  }
  entity.mortgage = event.params.mortgage;
  entity.clientId = event.params.clientId;
  entity.borrower = event.params.borrower;
  entity.amount = event.params.amount;
  entity.datetime = event.block.timestamp;
  entity.save();
}

export function handleMortgageStartMade(event: MortgageStartMade): void {
  let entity = MortgageStart.load(event.transaction.hash.toHex());
  if (!entity) {
    entity = new MortgageStart(event.transaction.hash.toHex());
  }
  entity.mortgage = event.params.mortgage;
  entity.clientId = event.params.clientId;
  entity.amount = event.params.amount;
  entity.date = event.params.date;
  entity.datetime = event.block.timestamp;
  entity.save()
}

export function handleWithdrawNFTMade(event: WithdrawNFTMade): void {
  let entity = WithdrawNFT.load(event.transaction.hash.toHex());
  if (!entity) {
    entity = new WithdrawNFT(event.transaction.hash.toHex());
  }
  entity.owner = event.params.origin;
  entity.tokenId = event.params.tokenId;
  entity.amount = event.params.amount;
  entity.save();
}