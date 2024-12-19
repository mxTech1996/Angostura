'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  Hero,
  Features,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { primaryColor } from '@/data';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log('env', process.env.NEXT_PUBLIC_API_KEY);
  return (
    <main
      style={{
        backgroundColor: '#F7EDC6FF',
      }}
    >
      <Navbar />
      <div className='relative'>
        <Hero
          variant='img-left'
          src={dataSite.image_hero}
          colorText='#FCFCFCFF'
          title={dataSite.subtitle}
          description={dataSite.description}
          // images={[dataSite.image_hero, dataSite.image_hero2]}
          styleTextSecondSection={{
            color: 'black',
          }}
          withShadowText
          stylesContainerImage={{
            padding: '40px',
          }}
          styleImage={{
            borderRadius: 2,
          }}
        />
      </div>
      <div className='container mx-auto flex flex-col gap-20 my-24 mt-10'>
        <FeaturesV2
          gridColumns={2}
          variant='text'
          textColor='#000'
          version='v2'
          features={dataSite.services.map((service) => ({
            ...service,
            src: service.image,
          }))}
        />
      </div>
      <div style={{ zIndex: 2 }} className='flex flex-col px-48' id='know-us'>
        <Typography.Title
          level={3}
          className='font-medium mb-10 text-center text-black'
        >
          Know Us
        </Typography.Title>
        <Missions
          textColor='#000'
          data={dataSite.info}
          gridColumns={1}
          backgroundColor={'#E5D48FFF'}
          variant='text'
        />
      </div>
      <div id='courses' className='mt-20 px-20'>
        {dataSite.products.length > 1 && (
          <ProductSection
            withCategoryFilter={false}
            title='All Courses'
            gridColumns={2}
            variant='grid'
            productItemVariant='vertical'
            onClickImage={(id) => {
              router.push(`/product/${id}`);
            }}
            productVersion='1'
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            backgroundItemColor='#FBFBFB'
            stylesItem={{
              borderRadius: 12,
            }}
          />
        )}
      </div>

      <div className='flex flex-col px-20' id='references'>
        <Typography.Title level={3} className='font-medium mb-10 text-center'>
          References
        </Typography.Title>
        <References
          carouselOptions={{
            arrowColor: 'black',
            fade: true,
            autoPlay: false,
            direction: 'horizontal',
          }}
          variantItem='card'
          variant='carousel'
          backgroundColor='#E5D7BAFF'
          references={dataSite.references}
          gridColumns={1}
          titleAlign='center'
        />
      </div>

      <Footer />
    </main>
  );
}
