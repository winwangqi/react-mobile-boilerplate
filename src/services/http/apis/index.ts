import client, { ResponseBase } from '../client'
import { RequestMethod } from './types'

export interface Init {
  path: string
  banner: string
  userlog: string
  production: string[]
}

export const getInit: RequestMethod<ResponseBase<Init>> = () =>
  client.get<ResponseBase<Init>>('/tmall/init')

export interface IndexGoods {
  yuanbao: string
  coin: string
  value: number
  click: number
}

export type IndexGoodsList = IndexGoods[]

export const getIndex: RequestMethod<ResponseBase<IndexGoodsList>> = () =>
  client.get<ResponseBase<IndexGoodsList>>('/tmall/index')

export const getIsLogin: RequestMethod<ResponseBase<any>> = () =>
  client.get<ResponseBase<any>>('/tmall/islogin')

export const getVcode: (mobile: string) => Promise<ResponseBase<string>> = (
  mobile: string,
) => client.get<ResponseBase<string>>(`tmall/vcode/${mobile}`)

export const doLogin: (data: any) => Promise<ResponseBase<any>> = (data) =>
  client.post<ResponseBase<any>>('tmall/dologin', data)

export interface GoodsListResult {
  mobile: string
  goods: GoodsItem[]
}

export interface GoodsItem {
  ordersn: string
  goods: string
  status: number
  status_str: string
  start_time: string
  end_time: string
  url: string
}

export const getGoodsList: RequestMethod<ResponseBase<GoodsListResult>> = () =>
  client.get<ResponseBase<GoodsListResult>>('/tmall/lists')

export interface ExchangeResult {
  ordersn: string
  goods: string
  time: string
  coin: string
  url: string
}

export const orderGoods: (
  value: number,
) => Promise<ResponseBase<ExchangeResult>> = (value) =>
  client.get<ResponseBase<ExchangeResult>>(`/tmall/order/${value}`)

export const directTopup: (data: any) => Promise<ResponseBase<any>> = (data) =>
  client.post<ResponseBase<any>>('/tmall/directyb', data)

export interface TBNick {
  goods: string
  nick: string
  ordersn: string
}

export const getTbnick: (ordersn: string) => Promise<ResponseBase<TBNick>> = (
  ordersn,
) => client.get<ResponseBase<TBNick>>(`/tmall/gettbnick/${ordersn}`)

export const taobaoCharge: (ordesn: string) => Promise<ResponseBase<any>> = (
  ordersn,
) => client.get<ResponseBase<any>>(`/tmall/result/${ordersn}`)
