import MainPage from "../components/m_main";

export const metadata = {
  title: 'Performance',
  description: '我的圖愛上',
}


export default function Page() {
    return (
           <MainPage imgUrl={'/image/1.jpg'} alt="Performance" content="Welcome to Performance" />
       
    );
}
