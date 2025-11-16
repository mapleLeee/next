import Link from "next/link";
import {yellow} from "next/dist/lib/picocolors";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div style={{border: "2px solid red", padding: "20px"}}>
            <h2>這是 User Layout（外層）</h2>
            {/*裡變，外不變*/}
            <div style={{padding: "20px"}} className="text-red-300">
                <Link href={"/user/one"} style={{fontSize:"24px",padding:"20px",fontWeight:"bold"}}>
                    111111111
                </Link>
                <div>
                    hh
                </div>
                <Link href={"/user/two"}>222222222</Link>
            </div>


            {children}
        </div>
    );
}
