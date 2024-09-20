import { useState } from "react";

export default function Modules() {
    // State to manage the collapse functionality and dropdown selection
    const [collapsed, setCollapsed] = useState(false);
    const [selectedAction, setSelectedAction] = useState("");

    // Toggle collapse state
    const toggleCollapseAll = () => {
        setCollapsed(!collapsed);
    };

    // Handle dropdown action selection
    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAction(event.target.value);
        // Logic for handling dropdown actions can be added here
        if (event.target.value) {
            alert(`Action Selected: ${event.target.value}`);
        }
        };


  return (
    <div>
      <div>
        <button onClick={toggleCollapseAll}>
          {collapsed ? "Expand All" : "Collapse All"}
        </button>
        <button>View Progress</button>

        {/* Dropdown with actions */}
        <select onChange={handleDropdownChange} value={selectedAction}>
        <option value="">Select Action</option>
        <option value="publish-all">Publish All</option>
        <option value="publish-selected">Publish Selected</option>
        <option value="unpublish-all">Unpublish All</option>
        <option value="unpublish-selected">Unpublish Selected</option>
        <option value="reset-progress">Reset Progress</option>
        </select>
         {/* Placeholder button */}
         <button className="placeholder-button">+ Module</button>

    </div>

      
      <ul id="wd-modules">
        {/* Week 1 */}
        <li className={`wd-module ${collapsed ? "collapsed" : ""}`}>
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
                <li className="wd-content-item">Overview of Frontend and Backend</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Install development tools</li>
                <li className="wd-content-item">Complete basic HTML project</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 2 */}
        <li className={`wd-module ${collapsed ? "collapsed" : ""}`}>
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML & CSS</li>
                <li className="wd-content-item">Building web pages with HTML</li>
                <li className="wd-content-item">Styling web pages with CSS</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Create your first web page</li>
                <li className="wd-content-item">Style the page using CSS</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 3 */}
        <li className={`wd-module ${collapsed ? "collapsed" : ""}`}>
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to JavaScript</li>
                <li className="wd-content-item">Understanding variables, functions, and loops</li>
                <li className="wd-content-item">Manipulating the DOM with JavaScript</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Create a dynamic web page</li>
                <li className="wd-content-item">Add interactivity with JavaScript</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 4 */}
        <li className={`wd-module ${collapsed ? "collapsed" : ""}`}>
          <div className="wd-title">Week 4</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Responsive Design</li>
                <li className="wd-content-item">Using Media Queries for different screen sizes</li>
                <li className="wd-content-item">Introduction to Flexbox and Grid</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">ASSIGNMENT</span>
              <ul className="wd-content">
                <li className="wd-content-item">Make your website responsive</li>
                <li className="wd-content-item">Use Flexbox to create a responsive layout</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
