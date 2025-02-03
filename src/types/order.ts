export type OrderType2 = {
  buyer: string;
  produce: string;
  orderId: number;
  farm: string;
  quantityType: string;
  quantityValue: number;
  amount: number;
  logistics?: boolean;
  deliveryAddress?: string;
};

export type OrderType = {
  produce_id: string;
  quantity: number;
  need_logistics: boolean;
  id: string;
  status: string;
  quantity_metric: string;
  amount: number;
  buyer_id: string;
  created_at: string;
  buyer: {
    name: string;
    location: string;
  };
  produce: {
    name: string;
    photos: string[];
    location: string;
    farm: {
      name: string;
    };
    farmer: {
      name: string;
    };
  };
};

export type BidType = {
  id: string;
  price: number;
  eta: number;
  eta_metric: string;
  status: string;
  note: string;
  vehicle_id: string;
  order_id: string;
  transporter_id: string;
  selected?: string;
  order: object
}