import { BigInt } from "@graphprotocol/graph-ts"
import {
  RepaymentMade,
  AdminChanged,
  BeaconUpgraded,
  Upgraded
} from "../generated/HouseHoldPool/HouseHoldPool"
import { RepaymentMade as Repayment } from "../generated/schema"

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
