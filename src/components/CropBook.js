import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CropBook.css';

import excelImage from '../assets/excel.png'; // Import the image

const CropBook = () => {
  return (
    <div className="crop-book-layout">
      {/* Main Content */}
      <div className="crop-book-main-content">
        <Container>
          <h2 className="estate-title">Dunwatta Estate</h2>
          <h4 className="division-title">GC Division</h4>
          <h1 className="page-title">Crop Book</h1>

          <div className="content-wrapper">
            {/* Table on the left */}
            <div className="table-container">
              <Table bordered>
                <thead>
                  <tr>
                    <th id="bookDayGreen">Tea</th>
                    <th>Rubber</th>
                    <th>Cinnamon</th>
                    <th>General</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="4">
                      <Table borderless className="inner-table">
                        <tbody>
                          <tr>
                            <td colSpan="3" id="book-row-1" className="crop-book-cell">Budgeted crop of the Year 2024/25</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-2" className="crop-book-cell">820000 Kg</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-3" className="crop-book-cell">Achieved Crop Upto end June</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-4" className="crop-book-cell">206101 Kg</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-5" className="crop-book-cell">Achievement</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-6" className="crop-book-cell">25%</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-7" className="crop-book-cell">Budgeted crop up to June</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-8" className="crop-book-cell">98.14333%</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-9" className="crop-book-cell">Budgeted crop for the month</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-10" className="crop-book-cell">67000 Kg</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-11" className="crop-book-cell">Achieved Crop - Todate</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-12" className="crop-book-cell">14791%</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-13" className="crop-book-cell">Budgeted Crop for todate</td>
                          </tr>
                          <tr>
                            <td colSpan="3" id="book-row-14" className="crop-book-cell">12967%</td>
                          </tr>
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            {/* New table with its own class and ID */}
            <div className="new-table-container">
              <Table bordered className="custom-crop-book-table" id="new-crop-table">
                <thead>
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
                </thead>
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

export default CropBook;