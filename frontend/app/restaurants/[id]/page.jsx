import { notFound } from 'next/navigation';
import React from 'react'

async function getDetail(id) {
    const res = await fetch(`http://localhost:5000/api/restaurant_detail/${id}`, {
        next: {
            revalidate: 0
        }
    });
    if (!res.ok) {
        notFound()
    }

    return res.json() 
}

export default async function RestaurantDetail({params}) {
    const {id} = await params
    const restaurant = await getDetail(id)
    const { name, phone, address } = restaurant;
    const { street, city, state, zipCode, country } = address;
    return (
        <main>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{street + city + state + country + zipCode}</p>
        </main>
  )
}
