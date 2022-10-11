import { AnalyticsIcon, CartIcon, ExchangeIcon, LogoIcon, MarketingIcon, PaymentIcon, PaymentLinkIcon, PieChartIcon,  TransactionIcon, WalletIcon } from '../../assets';

const IconComponent = ({
  name,
  size = 24,
  color = "black",
}) => {
    let Icon = '';
    switch (name) {
        case 'dashboard':
            Icon = <PieChartIcon size={size} color={color} />
          break
        case 'balances':
            Icon = <WalletIcon size={size} color={color} />
          break
        case 'transactions':
            Icon = <TransactionIcon size={size} color={color} />
          break
        case 'analytics':
            Icon = <AnalyticsIcon size={size} color={color} />
          break
        case 'marketing':
            Icon = <MarketingIcon size={size} color={color} />
          break
        case 'exchange-rates':
            Icon = <ExchangeIcon size={size} color={color} />
          break
        case 'checkout':
            Icon = <CartIcon size={size} color={color} />
          break
        case 'payment-link':
            Icon = <PaymentLinkIcon size={size} color={color} />
          break
        case 'wire':
            Icon = <PaymentIcon size={size} color={color} />
          break
        default:
          console.log('Invalid Input')
      }
//   return <PieChartIcon size={size} color={color} />;

return Icon
};

export default IconComponent;