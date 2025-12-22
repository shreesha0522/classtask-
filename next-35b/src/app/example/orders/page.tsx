'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function OrdersPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [status, setStatus] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  // CLIENT-SIDE REDIRECT
  const handleApply = () => {
    startTransition(() => {
      if (Number(price) < 0) {
        router.push('/example/orders/unauthorized');
      }
    });
  };

  // SERVER-SIDE STYLE REDIRECT LOGIC
  const handleNext = async () => {
    setError('');

    if (!status) {
      setError('Status is required');
      return;
    }

    startTransition(async () => {
      if (status === 'active') {
        router.push('/example/orders/success');
      } else if (status === 'inactive') {
        router.push('/example/orders/failure');
      } else {
        setError('Status must be "active" or "inactive"');
      }
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Orders Page</h2>

      <div>
        <label>Status:</label><br />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Price:</label><br />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <br />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button onClick={handleApply} disabled={isPending}>
        Apply
      </button>

      <button onClick={handleNext} disabled={isPending} style={{ marginLeft: 10 }}>
        Next
      </button>
    </div>
  );
}