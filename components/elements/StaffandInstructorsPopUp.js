"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import classes from "@/public/assets/css/ebi.module.css";
import StaffContent from "./StaffPopupContent";

const StaffInstructors = ({ name, jobTitle, bio }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className={classes.alignbtn}>
          <button
            className={classes.readmorebtn}
            type="button"
            onclick={() => setOpen(true)}
          >
            Read More
          </button>
        </div>
        {/* Popup Modal */}
        <section
          className={classes.popupsection}
          isOpen={isOpen}
          onClose={() => setOpen(false)}
        >
          <div className={classes.stafftextdiv}>
            <div className={classes.staffname}>{name}</div>
            <div className={classes.jobtitle}>{jobTitle}</div>
            <div className={classes.staffbiotext}>{bio}</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StaffInstructors;
