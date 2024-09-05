import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CropAchievement.css';  // Updated CSS file

const CropAchievement = () => {
  return (
    <div className="crop-achievement-layout">
      {/* Main Content */}
      <div className="crop-achievement-main-content">
        <Container>
          <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h1 className="page-title">Crop Achievement</h1>

          <div className="content-wrapper-achievement">
            {/* Table on the left */}
            <div className="table-container-achievement">
              <Table bordered>
                <thead>
                  <tr>
                    <th id="achievementDayGreen">Tea</th>
                    <th>Rubber</th>
                    <th>Cinnamon</th>
                    <th>General</th>
                  </tr>
                  <th colSpan="2">Day</th>
                  <th colSpan="2">Todate</th>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4">
                      <Table borderless className="inner-table-achievement">
                        <tbody>
                          <tr>
                            <td colSpan="3" id="achievement-row-1" className="crop-achievement-cell">Budgeted crop of the Year 2024/25</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-2" className="crop-achievement-cell">820000 Kg</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-3" className="crop-achievement-cell">Achieved Crop Upto end June</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-4" className="crop-achievement-cell">206101 Kg</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-5" className="crop-achievement-cell">Achievement</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-6" className="crop-achievement-cell">25%</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-7" className="crop-achievement-cell">Budgeted crop up to June</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-8" className="crop-achievement-cell">98.14333%</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-9" className="crop-achievement-cell">Budgeted crop for the month</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-10" className="crop-achievement-cell">67000 Kg</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-11" className="crop-achievement-cell">Achieved Crop - Todate</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-12" className="crop-achievement-cell">14791%</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-13" className="crop-achievement-cell">Budgeted Crop for todate</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="achievement-row-14" className="crop-achievement-cell">12967%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            {/* New table with its own class and ID */}
            <div className="new-table-container-achievement">
              <Table bordered className="custom-crop-achievement-table" id="new-achievement-table">
               
                  <tr>
                    <th colSpan="19" id="top-day-cell">Day </th> {/* DAY top cell */}
                  </tr>
                  <tr>
                    <th></th> {/* Empty top-left cell */}
                    <th colSpan="2">Factory Weight</th>
                    <th colSpan="2">Field Weight</th>
                    <th colSpan="2">Checked Weight</th>
                    <th colSpan="2">Yield per Hectare</th>
                    <th colSpan="2">No Of Pluckers</th>
                    <th colSpan="2">Over Kilos</th>
                    <th colSpan="2">Cash Kilos</th>
                    <th colSpan="2">Plucking Average</th>
                    <th colSpan="2">Plucking Cost per kg</th>
                  </tr>
                  <tr>
                    <th></th>
                    {/* Only the 'Todate' cells for each category */}
                    {Array(9).fill(null).map((_, index) => (
                      <>
                        <th key={`day-${index}`}>Day</th>
                        <th key={`todate-${index}`}>Todate</th>
                      </>
                    ))}
                  </tr>
                
                <tbody>
                  {Array(29).fill(null).map((_, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td> {/* Row numbers */}
                      {Array(18).fill(null).map((_, cellIndex) => (
                        <td key={cellIndex}></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>

      {/* Sidebar */}
      <div className="crop-book-profile-sidebar">
        <div className="profile">
          <div className="profile-image"></div>
          <div className="name-background w-100 text-center">
            <h4 className="text-white">Mr. Nanayakkara</h4>
            <p className="text-white">Manager</p>
          </div>
        </div>
        <div className="menu-items d-flex flex-column">
          <Button variant="outline-success" className="crop-book-menu-item mb-2">
            Messages
            <span className="crop-book-notification-badge">2</span>
          </Button>
          <Button variant="outline-success" className="crop-book-menu-item mb-2">Order Request / Return</Button>
          <Button variant="outline-success" className="crop-book-menu-item mb-2">Plucking Rounds</Button>
          <Button variant="outline-success" className="crop-book-menu-item mb-2">Work Program</Button>
          <Button variant="outline-success" className="crop-book-menu-item mb-2">Tapping Rounds</Button>
        </div>
        <div className="action-buttons">
          <Button variant="success" className="submit-button">Submit</Button>
          <Button variant="warning" className="edit-button">Edit</Button>
          <Link to="/">
            <Button variant="danger" className="crop-book-main-menu-button">Main Menu</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropAchievement;