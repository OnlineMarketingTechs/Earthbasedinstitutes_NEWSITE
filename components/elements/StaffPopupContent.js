import classes from "@/public/assets/css/ebi.module.css";

export default function StaffContent({ StaffBio }) {
  return (
    <section className={classes.popupsection}>
      <div className={classes.staffbiotext}>{StaffBio}</div>
    </section>
  );
}
