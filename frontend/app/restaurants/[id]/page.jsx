import { notFound } from 'next/navigation';

async function getDetail(id) {
    const res = await fetch(`http://localhost:5000/api/restaurant_detail/${id}`, {
        next: {
            revalidate: 60
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
    const { name, phone, address, happyHours, cuisineType, categoryType, websiteUrl, location, description, menuCategories, hoursOfOperation} = restaurant;
    return (
        <main>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{Object.values(address).join(', ')}</p>

        </main>
  )
}
