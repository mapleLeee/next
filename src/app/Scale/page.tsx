import MainPage from "../components/m_main";

export const metadata = {
  title: 'Scale',
  description: '我的圖愛上',
}

export default function Page() {
    return (
           <MainPage imgUrl={'/image/4.jpg'} alt="Scale" content="Welcome to Scale" />
       
    );
}
