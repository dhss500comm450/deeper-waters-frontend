import ClassCard from "./ClassCard";
import { classes } from "../data/classes";

// Displays all class cards.
function ClassList() {
  return (
    <div className="class-list">
      {classes.map((group) => (
        <ClassCard key={group.year} group={group} />
      ))}
    </div>
  );
}

export default ClassList;