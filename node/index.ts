import { PaymentProviderService } from '@vtex/payment-provider'
import ConectorExample from './connector'


export default new PaymentProviderService({
  connector: ConectorExample,
})
