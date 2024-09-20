export default function Assignments() {
    return (
      <div id="wd-assignments">
        {/* Search and Buttons Section */}
        <input 
          id="wd-search-assignment"
          placeholder="Search for Assignments"
          style={{ marginRight: '10px' }}
        />
        <button id="wd-add-assignment-group" style={{ marginRight: '5px' }}>
          + Group
        </button>
        <button id="wd-add-assignment">
          + Assignment
        </button>
        
        {/* Assignments Title */}
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total
          <button style={{ marginLeft: '10px' }}>+</button>
        </h3>
        
        {/* Assignments List */}
        <ul id="wd-assignment-list">
          {/* Assignment 1 */}
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
              style={{ fontWeight: 'bold', color: 'blue' }}>
              A1 - ENV + HTML
            </a>
            <div style={{ marginTop: '5px' }}>
              Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am | <br/>
              <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </div>
          </li>
  
          {/* Assignment 2 */}
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/124"
              style={{ fontWeight: 'bold', color: 'blue' }}>
              A2 - CSS + BOOTSTRAP
            </a>
            <div style={{ marginTop: '5px' }}>
              Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am | <br/>
              <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </li>
  
          {/* Assignment 3 */}
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/125"
              style={{ fontWeight: 'bold', color: 'blue' }}>
              A3 - JAVASCRIPT + REACT
            </a>
            <div style={{ marginTop: '5px' }}>
              Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am | <br/>
              <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          </li>
        </ul>
      </div>
    );
  }
  