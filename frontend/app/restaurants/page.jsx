import Link from 'next/link';
import Image from 'next/image';
import img from './beers.jpeg';

// component, utilities
import checkHappyHourStatus from '../utils/checkHappyHourStatus';

async function getDetail() {
    const res = await fetch(`http://localhost:5000/api/restaurant_listing`, {
        next: {
            revalidate: 60
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
        <div key={restaurant._id.$oid} className='horizontal-card'>
            <Image 
              src={img}
              alt='restaurant image'
              width={150}
              quality={100}
            />
            <div>
              <Link href={`restaurants/${restaurant._id.$oid}`}> <h3>{restaurant.name}</h3></Link>
              <p>{Object.values(restaurant.address).join(', ')}</p>
              <p>rating</p>
              <p>
                Happy hour 
                {checkHappyHourStatus(restaurant.happyHours).isHappyHour && <span>now </span>}
                {checkHappyHourStatus(restaurant.happyHours).startSoon && <span>start soon </span>}

                
              </p>


            </div>         
        </div>
      ))}
    </main>
  )
}
