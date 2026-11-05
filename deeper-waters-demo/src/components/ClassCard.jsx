
import { useState } from "react";

// Reusable component for displaying an individual class card.
// The class information is passed in through the group prop.
function ClassCard({ group }) {
  // Tracks whether this particular card is expanded.
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="class-card">

      {/* Decorative year panel */}
      <div className="class-photo">
        <span className="photo-year">{group.year}</span>
        <span className="photo-caption">
          THE BEGINNING OF A LEGACY
        </span>
      </div>

      {/* Main class information */}
      <div className="class-content">
        <p className="class-year">
          CLASS OF {group.year}
        </p>

        <h3>{group.title}</h3>

        <p className="class-description">
          {group.description}
        </p>

        {/* Button to expand or collapse the class details */}
        <button
          className="expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded
            ? "Close Class Details"
            : "Explore Class Details"}

          <span>{isExpanded ? "−" : "+"}</span>
        </button>

        {/* Only displays the details when the card is expanded */}
        {isExpanded && (
          <div className="class-details">

            {/* Class members */}
            <div>
              <h4>Class Members</h4>

              <ul>
                {group.members.map((member, index) => (
                  <li key={`${member}-${index}`}>
                    {member}
                  </li>
                ))}
              </ul>
            </div>

            {/* Class contributions and projects */}
            <div>
              <h4>Contributions</h4>

              <ul>
                {group.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>

          </div>
        )}
      </div>

    </article>
  );
}

// Allows other files to import and reuse this component.
export default ClassCard;
