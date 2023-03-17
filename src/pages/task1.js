import { TextField } from "@mui/material";
import { useCallback } from "react";
import "./task1.css";

const Task1 = () => {
  const onFrameIcon1Click = useCallback(() => {
    // Please sync "Task 2" to the project
  }, []);

  return (
    <div className="task-1">
      <div className="sidenavigation">
        <div className="navoption">
          <img className="task-icon" alt="" src="/task.svg" />
        </div>
        <div className="navoption1">
          <img className="dashboard-icon" alt="" src="/dashboard.svg" />
        </div>
      </div>
      <div className="survey-table">
        <div className="frame-parent">
          <div className="welcome-back-anna-parent">
            <b className="welcome-back-anna">21</b>
            <div className="youve-learned-80">Total Surveys</div>
            <div className="youve-learned-801">View All</div>
            <div className="iconsfact-check-black-24dp-wrapper">
              <img
                className="iconsfact-check-black-24dp"
                alt=""
                src="/iconsfact-check-black-24dp.svg"
              />
            </div>
          </div>
          <div className="welcome-back-anna-group">
            <b className="welcome-back-anna">3</b>
            <div className="youve-learned-802">Ongoing Surveys</div>
            <div className="youve-learned-803">View All</div>
            <div className="timely-access-to-care-wrapper">
              <img
                className="iconsfact-check-black-24dp"
                alt=""
                src="/timely-access-to-care.svg"
              />
            </div>
          </div>
          <div className="welcome-back-anna-parent">
            <b className="welcome-back-anna">8</b>
            <div className="youve-learned-80">Draft Surveys</div>
            <div className="youve-learned-803">View All</div>
            <div className="iconsfact-check-black-24dp-wrapper">
              <img
                className="iconsfact-check-black-24dp"
                alt=""
                src="/reschedule.svg"
              />
            </div>
          </div>
          <div className="welcome-back-anna-parent">
            <b className="welcome-back-anna">10</b>
            <div className="youve-learned-80">Completed Surveys</div>
            <div className="youve-learned-803">View All</div>
            <div className="iconsfact-check-black-24dp-wrapper">
              <img
                className="iconsfact-check-black-24dp"
                alt=""
                src="/iconscheck-circle-black-24dp.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="frame-container">
            <div className="welcome-back-anna-parent1">
              <b className="welcome-back-anna4">Surveys (21)</b>
              <div className="frame-parent1">
                <div className="frame-wrapper">
                  <div className="iconssearch-black-24dp-1-parent">
                    <img
                      className="iconsfact-check-black-24dp"
                      alt=""
                      src="/iconssearch-black-24dp-1.svg"
                    />
                    <div className="input">Search by Survey Name</div>
                  </div>
                </div>
                <div className="frame-parent2">
                  <img className="frame-child" alt="" src="/frame-27323.svg" />
                  <img
                    className="frame-item"
                    alt=""
                    src="/frame-27329.svg"
                    onClick={onFrameIcon1Click}
                  />
                  <img className="frame-inner" alt="" src="/frame-27330.svg" />
                  <img className="frame-icon" alt="" src="/frame-27324.svg" />
                  <img className="frame-child" alt="" src="/frame-27328.svg" />
                  <img className="frame-child" alt="" src="/frame-27326.svg" />
                </div>
              </div>
            </div>
            {/* <div className="filterapplied">
              <div className="frame-parent3">
                <div className="tags-wrapper">
                  <div className="tags">
                    <div className="label">Advanced Received</div>
                    <img
                      className="iconsclose-black-24dp"
                      alt=""
                      src="/iconsclose-black-24dp.svg"
                    />
                  </div>
                </div>
                <div className="rectangle-parent">
                  <div className="rectangle-div" />
                  <div className="input">Clear Filter</div>
                </div>
              </div>
            </div> */}
            {/* <div className="block-parent">
              <div className="block">
                <div className="header">
                  <div className="cellheadermaster">
                    <div className="container">
                      <div className="content">
                        <div className="label1">Survey Name</div>
                        <div className="iconssort-wrapper">
                          <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconssort.svg"
                          />
                        </div>
                      </div>
                      <div className="container-child" />
                    </div>
                    <div className="cellheadermaster-child" />
                  </div>
                </div>
                <div className="table-row-cells">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">Assign Sales Consultant</div>
                    </div>
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Approve Order</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Upload 3D Design</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Approve Advance</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Approve Order</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Approve Advance</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Assign Sales Consultant</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Upload 3D Design</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Upload 3D Design</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Assign Sales Consultant</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Approve Advance</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container1">
                      <div className="input">Approve Advance</div>
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline" />
                </div>
              </div>
              <div className="block1">
                <div className="header1">
                  <div className="cellheadermaster">
                    <div className="container">
                      <div className="content">
                        <div className="label1">Created By</div>
                        <div className="iconssort-wrapper">
                          <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconssort1.svg"
                          />
                        </div>
                      </div>
                      <div className="container-child" />
                    </div>
                  </div>
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial">
                        <div className="aa">RS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Ram Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0004</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial">
                        <div className="aa">AP</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Aarav Patil</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0003</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial">
                        <div className="aa">AP</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Aarav Patil</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0003</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial1">
                        <div className="aa">MS</div>
                      </div>
                      <div className="data">
                        <div className="input">Mr. Mahendra Singh</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0002</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="profilecircleinitial11">
                        <div className="aa">AD</div>
                      </div>
                      <div className="data">
                        <div className="input">Ms. Aarushi Doe</div>
                        <div className="sublabel-wrapper">
                          <div className="sublabel">SSEDL0005</div>
                        </div>
                      </div>
                    </div>
                    <div className="rightline11" />
                  </div>
                  <div className="bottomline12" />
                </div>
              </div>
              <div className="block2">
                <div className="header1">
                  <div className="cellheadermaster">
                    <div className="container">
                      <div className="content">
                        <div className="label1">Status</div>
                        <div className="iconssort-wrapper">
                          <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconssort2.svg"
                          />
                        </div>
                      </div>
                      <div className="container-child" />
                    </div>
                  </div>
                </div>
                <div className="table-row-cells24">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags1">
                        <div className="label">Completed</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells30">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags7">
                        <div className="label">Ongoing</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells30">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags7">
                        <div className="label">Ongoing</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags2">
                        <div className="label">Draft</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells30">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags7">
                        <div className="label">Ongoing</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells24">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="tags1">
                        <div className="label">Completed</div>
                      </div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
              </div>
              <div className="block3">
                <div className="header">
                  <div className="cellheadermaster">
                    <div className="container">
                      <div className="content">
                        <div className="label1">No of Questions</div>
                        <div className="iconssort-wrapper">
                          <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconssort3.svg"
                          />
                        </div>
                      </div>
                      <div className="container-child" />
                    </div>
                  </div>
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">8</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
              </div>
              <div className="block3">
                <div className="header">
                  <div className="cellheadermaster">
                    <div className="container">
                      <div className="content">
                        <div className="label1">Created On</div>
                        <div className="iconssort-wrapper">
                          <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconssort4.svg"
                          />
                        </div>
                      </div>
                      <div className="container-child" />
                    </div>
                  </div>
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container1">
                      <div className="input">22 Jan 2022; 10:00:00</div>
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
              </div>
              <div className="block3">
                <div className="header">
                  <div className="cellheadermaster">
                    <div className="container">
                      <div className="content">
                        <div className="label1">Expiry On</div>
                        <div className="iconssort-wrapper">
                          <img
                            className="iconsfact-check-black-24dp"
                            alt=""
                            src="/iconssort5.svg"
                          />
                        </div>
                      </div>
                      <div className="container-child" />
                    </div>
                  </div>
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox1">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp.svg"
                      />
                    </div>
                    <div className="rightline" />
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp1.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp2.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp3.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp4.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp5.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp6.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp7.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp8.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp9.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp10.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
                <div className="table-row-cells1">
                  <div className="contentbox">
                    <div className="container14">
                      <div className="input">22 Jan 2022</div>
                      <img className="accountcircle-icon" alt="" />
                      <img className="accountcircle-icon" alt="" />
                      <img
                        className="task-icon"
                        alt=""
                        src="/iconsmore-vert-black-24dp11.svg"
                      />
                    </div>
                  </div>
                  <div className="bottomline12" />
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="pagination">
            <div className="label">(1 - 6 of 35753)</div>
            <div className="ipiconsfilledv1arrow1-copy-parent">
              <img
                className="ipiconsfilledv1arrow1-copy"
                alt=""
                src="/ipiconsfilledv1arrow1-copy-4.svg"
              />
              <div className="ipiconsfilledv1arrow1-copy-group">
                <img
                  className="ipiconsfilledv1arrow1-copy"
                  alt=""
                  src="/ipiconsfilledv1arrow1-copy-3.svg"
                />
                <img
                  className="ipiconsfilledv1arrow1-copy"
                  alt=""
                  src="/ipiconsfilledv1arrow1-copy-5.svg"
                />
              </div>
            </div>
            <div className="group-parent">
              <div className="rectangle-group">
                <div className="rectangle" />
                <div className="div">1</div>
              </div>
              <div className="rectangle-container">
                <div className="rectangle1" />
                <div className="div1">2</div>
              </div>
              <div className="rectangle-container">
                <div className="rectangle1" />
                <div className="div1">3</div>
              </div>
              <div className="rectangle-container">
                <div className="rectangle1" />
                <div className="div1">4</div>
              </div>
            </div>
            <div className="ipiconsfilledv1arrow1-copy-container">
              <img
                className="ipiconsfilledv1arrow1-copy"
                alt=""
                src="/ipiconsfilledv1arrow1-copy-41.svg"
              />
              <div className="ipiconsfilledv1arrow1-copy-group">
                <img
                  className="ipiconsfilledv1arrow1-copy"
                  alt=""
                  src="/ipiconsfilledv1arrow1-copy-31.svg"
                />
                <img
                  className="ipiconsfilledv1arrow1-copy"
                  alt=""
                  src="/ipiconsfilledv1arrow1-copy-51.svg"
                />
              </div>
            </div>
            <div className="label">Show</div>
            <div className="rectangle-copy-4-parent">
              <div className="rectangle-copy-4" />
              <img
                className="iconsarrow-drop-down-black-24"
                alt=""
                src="/iconsarrow-drop-down-black-24dp.svg"
              />
              <div className="div4">10</div>
            </div>
            <div className="label">Entries</div>
          </div> */}
        </div>
      </div>
      <div className="task-1-child" />
      <div className="topnavigation">
        <div className="lhs">
          <img className="logo-icon" alt="" src="/logo.svg" />
          <div className="breadcrumb">
            <div className="label">Dashboard</div>
            <img
              className="iconsfact-check-black-24dp"
              alt=""
              src="/iconschevron-right-black-24dp.svg"
            />
            <div className="div5">...</div>
            <img
              className="iconschevron-right-black-24dp1"
              alt=""
              src="/iconschevron-right-black-24dp1.svg"
            />
            <div className="item-3">View Details</div>
          </div>
        </div>
        <div className="rhs">
          <div className="notification">
            <img
              className="iconsnotification-24dp"
              alt=""
              src="/iconsnotification-24dp.svg"
            />
            <div className="dotinitial">
              <div className="div6">1</div>
            </div>
          </div>
          <div className="profilecircleinitial12">
            <div className="aa">AA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task1;
