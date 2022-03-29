import { BigInt } from "@graphprotocol/graph-ts"
import {
  RepaymentMade,
  DepositMade,
} from "../generated/HouseHoldPool/HouseHoldPool"
import { RepaymentMade as Repayment, DepositMade as Deposit } from "../generated/schema"

export function handleRepaymentMade(event: RepaymentMade): void {
  let entity = Repayment.load(event.transaction.hash.toHex())
  if (!entity) {
    entity = new Repayment(event.transaction.hash.toHex())
  }
  entity.mortgage = event.params.mortgage
  entity.amount = event.params.amount
  entity.datetime = event.block.timestamp
  entity.save()
}

export function handleDepositMade(event: DepositMade): void {
  let entity = Deposit.load(event.transaction.hash.toHex())
  if (!entity) {
    entity = new Deposit(event.transaction.hash.toHex())
  }
  entity.owner = event.params.origin
  entity.contract = event.params.to
  entity.tokenId = event.params.tokenId
  entity.amount = event.params.amount
  entity.period = event.params.period
  entity.datetime = event.block.timestamp
  entity.save()
}