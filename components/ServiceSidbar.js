"use client";
import "@/public/assets/css/ebi.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProgramsMenu() {
    const pathname = usePathname();
    return (
        <div className="widget widget_categories_two">
        <div className="widget-content">
          <ul className="categories-list clearfix">
            <li>
              <Link className={` ${
            pathname === "/nature-connected-coaching" ? "active" : "notactive"
          }`} href="/nature-connected-coaching">
                Nature-Connected Coaching
                <span />
              </Link>
            </li>
            {/* <li>
              <Link href="/your-bee-line-strategy">
                New Course- Your Bee-line strategy
                <span />
              </Link>
            </li> */}
            <li>
              <Link className={
            pathname === "/nature-connected-leadership" ? "active" : "notactive"
          } href="/nature-connected-leadership">
                Nature-Connected Leadership <span />
              </Link>
            </li>
            <li>
              <Link className={` ${
            pathname === "/wilderness-quest" ? "programsactive" : "notactive"
          }`}  href="/wilderness-quest">
                Wilderness Quest
                <span />
              </Link>
            </li>
            <li>
              <Link className={` ${
            pathname === "/ebi-community-adventure" ? "programsactive" : "notactive"
          }`} href="/ebi-community-adventure">
                EBI Community Adventure <span />
              </Link>
            </li>
            <li>
              <Link className={` ${
            pathname === "/other-programs" ? "programsactive" : "notactive"
          }`} href="/other-programs">
                Other Programs <span />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
}