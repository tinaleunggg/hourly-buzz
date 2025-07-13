import React from 'react'
import Link from 'next/link';

async function getDetail() {
    const res = await fetch(`http://localhost:5000/api/restaurant_listing`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) {
        notFound();
    }
    return res.json() 
}

export default async function ResturantsListing() {
  const restaurants = await getDetail()

  return (
    <main>
      {restaurants.map((restaurant) => (
        <div key={restaurant._id.$oid}>
          <Link href={`restaurants/${restaurant._id.$oid}`}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.phone}</p>
            <p>{restaurant._id.$oid}</p>          
          </Link>

        </div>
      ))}
    </main>

  )
}
