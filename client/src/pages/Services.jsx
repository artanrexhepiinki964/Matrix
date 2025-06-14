import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('/api/services').then(res => setServices(res.data));
  }, []);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(service => (
        <ServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
}
