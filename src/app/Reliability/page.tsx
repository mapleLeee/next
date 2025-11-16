import MainPage from "../components/m_main";

export const metadata = {
  title: 'Reliability',
  description: '我的圖愛上',
}


export default function Page() {
    return (
           <MainPage imgUrl={'/image/3.jpg'} alt="Reliability" content="Welcome to Reliability" />
       
    );
}
