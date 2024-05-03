import React, { useState, useEffect } from 'react';
import classes from './paymentPage.module.css';
import { getNewOrderForCurrentUser } from '../../services/orderService';
import Title from '../../components/Title/Title';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import Map from '../../components/Map/Map';
import PaypalButtons from '../../components/PaypalButtons/PaypalButtons';
import InfoBox from '../../components/InfoBox/InfoBox';

export default function PaymentPage() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewOrderForCurrentUser();
        setOrder(data);
      } catch (error) {
        console.error('Error fetching order:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <p>Error: Unable to fetch order</p>;
  }

  return (
    <div className={classes.container}>
      <InfoBox>
        <p>You can simulate a payment using these data.</p>
        <p>Email: fast-food@example.com</p>
        <p>Password: food1234</p>
      </InfoBox>
      <div className={classes.content}>
        <Title title="Order Form" fontSize="1.6rem" />
        <div className={classes.summary}>
          <div>
            <h3>Name:</h3>
            <span>{order.name}</span>
          </div>
          <div>
            <h3>Contact: </h3>
            <span>{order.contact}</span>
          </div>
        </div>
        <OrderItemsList order={order} />
      </div>
      <div className={classes.map}>
        <Title title="Your Location" fontSize="1.6rem" />
        <Map readonly={true} location={order.addressLatLng} />
      </div>
      <div className={classes.buttons_container}>
        <div className={classes.buttons}>
          <PaypalButtons order={order} />
        </div>
      </div>
    </div>
  );
}
