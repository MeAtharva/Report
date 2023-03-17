import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./task12.css";

const Task12 = () => {
  const navigate = useNavigate();

  const onSwitchIconClick = useCallback(() => {
    navigate("/task-16");
  }, [navigate]);

  const onItem1TextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="task-12">
      <div className="sidenavigation1">
        <div className="navoption2">
          <img className="live-icon" alt="" src="/task.svg" />
        </div>
        <div className="navoption3">
          <img className="live-icon" alt="" src="/dashboard1.svg" />
        </div>
      </div>
      <div className="event-heading-creator-parent">
        <div className="event-heading-creator">
          <div className="event-heading-creator-inner">
            <div className="group-wrapper">
              <div className="group-wrapper">
                <img className="bg-icon" alt="" src="/bg.svg" />
                <div className="buttonoutline-button-parent">
                  <div className="buttonoutline-button">
                    <div className="content6">
                      <img
                        className="edit-outline-icon"
                        alt=""
                        src="/edit-outline.svg"
                      />
                      <div className="name">Edit</div>
                      <img
                        className="right-side-icon-onoff"
                        alt=""
                        src="/right-side-icon-onoff.svg"
                      />
                    </div>
                  </div>
                  <div className="lock-fill-1-parent">
                    <img className="png-1-icon" alt="" src="/lock-fill-1.svg" />
                    <div className="input-parent">
                      <b className="input1">Public</b>
                      <div className="label79">Access</div>
                    </div>
                  </div>
                </div>
                <div className="buttonoutline-button-group">
                  <div className="buttonoutline-button">
                    <div className="content7">
                      <img
                        className="dot-icon"
                        alt=""
                        src="/edit-outline1.svg"
                      />
                      <img
                        className="right-side-icon-onoff"
                        alt=""
                        src="/right-side-icon-onoff1.svg"
                      />
                    </div>
                  </div>
                  <div className="px-check-parent">
                    <img className="px-check" alt="" src="/24px--check.svg" />
                    <div className="input-group">
                      <b className="input1">Upcoming</b>
                      <div className="label80">Status</div>
                    </div>
                  </div>
                </div>
                <div className="label-parent">
                  <div className="accepting-responses">Survey Name</div>
                  <div className="h1-medium">Assign Sales Consultant</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-container">
            <div className="input-container">
              <div className="input3">2020-01-27 • 01 : 30 PM</div>
              <div className="last-name">Start on</div>
            </div>
            <img className="group-child" alt="" src="/group-7026.svg" />
          </div>
          <div className="event-heading-creator-child">
            <div className="group-frame">
              <div className="group-frame">
                <div className="input-parent1">
                  <div className="input3">Jack Matthew</div>
                  <div className="last-name">Created By</div>
                </div>
                <img className="group-item" alt="" src="/group-7022.svg" />
              </div>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="group-wrapper1">
              <div className="group-parent2">
                <div className="input-parent2">
                  <div className="input3">2020-01-01</div>
                  <div className="last-name">Created On</div>
                </div>
                <img className="group-item" alt="" src="/group-7020.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="group-parent3">
                <div className="input-parent3">
                  <div className="input3">10</div>
                  <div className="last-name">Survey Questions</div>
                </div>
                <img className="group-item" alt="" src="/group-70201.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="group-parent4">
                <div className="input-parent4">
                  <div className="input3">68</div>
                  <div className="last-name">Total Responses</div>
                </div>
                <img className="group-item" alt="" src="/group-7024.svg" />
              </div>
            </div>
            <div className="group-wrapper1">
              <div className="group-parent2">
                <div className="input-parent2">
                  <div className="input3">2020-03-01</div>
                  <div className="last-name">Expires On</div>
                </div>
                <img className="group-item" alt="" src="/group-70202.svg" />
              </div>
            </div>
            <div className="group-wrapper5">
              <div className="group-parent6">
                <img className="group-item" alt="" src="/group-7030.svg" />
                <div className="input-parent6">
                  <div className="input3">68</div>
                  <div className="last-name">Total Respondents</div>
                </div>
              </div>
            </div>
            <div className="group-wrapper5">
              <div className="group-parent7">
                <div className="group-wrapper7">
                  <div className="input-parent7">
                    <div className="input10">IT, Networking, Data</div>
                    <div className="last-name">Tags</div>
                  </div>
                </div>
                <img className="group-item" alt="" src="/group-7012.svg" />
              </div>
            </div>
            <div className="live-parent">
              <img className="live-icon" alt="" src="/live.svg" />
              <div className="input-parent8">
                <b className="input1">Active</b>
                <div className="label79">Status</div>
              </div>
            </div>
          </div>
          <div className="event-heading-creator-item" />
          <div className="accepting-responses-parent">
            <b className="accepting-responses">Accepting Responses</b>
            <img
              className="switch-icon"
              alt=""
              src="/switch.svg"
              onClick={onSwitchIconClick}
            />
          </div>
        </div>
        <div className="enrollment-stats-parent">
          <div className="enrollment-stats">
            <div className="frame-parent5">
              <div className="ellipse-parent">
                <img className="ellipse-icon" alt="" src="/ellipse-31.svg" />
                <img className="ellipse-icon" alt="" src="/ellipse-28.svg" />
                <img className="ellipse-icon" alt="" src="/ellipse-32.svg" />
                <img className="frame-child5" alt="" src="/ellipse-30.svg" />
                <div className="total-count-parent">
                  <b className="total-count">100</b>
                  <div className="optional-label">Users</div>
                </div>
              </div>
              <div className="frame-parent6">
                <div className="labelfilled-parent">
                  <div className="labelfilled">
                    <b className="rank">20%</b>
                  </div>
                  <div className="lmnop-parent">
                    <b className="lmnop">20</b>
                    <div className="lmnop1">Completed</div>
                  </div>
                </div>
                <div className="labelfilled-parent">
                  <div className="labelfilled1">
                    <b className="rank">50%</b>
                  </div>
                  <div className="lmnop-parent">
                    <b className="lmnop">50</b>
                    <div className="lmnop1">In Progress</div>
                  </div>
                </div>
                <div className="labelfilled-parent">
                  <div className="labelfilled2">
                    <b className="rank">30%</b>
                  </div>
                  <div className="lmnop-parent">
                    <b className="lmnop">30</b>
                    <div className="lmnop1">Not Started</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent7">
              <div className="total-count-group">
                <b className="total-count">140</b>
                <div className="optional-label">Total Employees</div>
              </div>
              <div className="frame-parent8">
                <div className="frame-parent9">
                  <div className="rectangle-parent2">
                    <div className="frame-child6" />
                    <div className="frame-child7" />
                  </div>
                  <div className="vector-parent">
                    <img
                      className="rectangle-icon"
                      alt=""
                      src="/rectangle-1066.svg"
                    />
                    <div className="h1-medium-24px-parent">
                      <div className="lmnop">Completed</div>
                      <b className="lmnop6">30 %</b>
                    </div>
                  </div>
                </div>
                <div className="frame-parent9">
                  <div className="rectangle-parent2">
                    <div className="frame-child8" />
                    <div className="frame-child9" />
                  </div>
                  <div className="vector-parent">
                    <img
                      className="rectangle-icon"
                      alt=""
                      src="/rectangle-1069.svg"
                    />
                    <div className="h1-medium-24px-parent">
                      <div className="lmnop">In Progress</div>
                      <b className="lmnop6">40 %</b>
                    </div>
                  </div>
                </div>
                <div className="frame-parent11">
                  <div className="rectangle-parent2">
                    <div className="frame-child11" />
                    <div className="frame-child12" />
                  </div>
                  <div className="vector-container">
                    <img
                      className="rectangle-icon"
                      alt=""
                      src="/rectangle-10691.svg"
                    />
                    <div className="h1-medium-24px-container">
                      <div className="lmnop">In Progress</div>
                      <b className="lmnop6">40 %</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent12">
              <div className="frame-parent13">
                <div className="input-parent9">
                  <b className="name">Overall Completion Stats</b>
                  <div className="px-drag-parent">
                    <img className="px-drag" alt="" src="/24px--drag.svg" />
                    <img
                      className="settings-outline-icon"
                      alt=""
                      src="/settings-outline.svg"
                    />
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
              </div>
              <div className="frame-parent14">
                <div className="ellipse-parent">
                  <img
                    className="frame-child15"
                    alt=""
                    src="/ellipse-281.svg"
                  />
                  <img className="ellipse-icon" alt="" src="/ellipse-31.svg" />
                  <img className="frame-child5" alt="" src="/ellipse-30.svg" />
                  <div className="total-count-container">
                    <b className="total-count">13</b>
                    <div className="optional-label">Responses</div>
                  </div>
                </div>
                <div className="frame-parent6">
                  <div className="labelfilled-parent">
                    <div className="labelfilled1">
                      <b className="rank">70%</b>
                    </div>
                    <div className="lmnop9">Complete</div>
                  </div>
                  <div className="labelfilled-parent">
                    <div className="labelfilled2">
                      <b className="rank">30%</b>
                    </div>
                    <div className="lmnop9">Incomplete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent16">
            <div className="frame-parent17">
              <div className="frame-parent18">
                <div className="input-parent10">
                  <b className="input13">Response Trends</b>
                  <div className="input-parent11">
                    <div className="input14">
                      <div className="bg" />
                      <div className="input-wrapper">
                        <div className="input15">Weekly</div>
                      </div>
                      <img
                        className="arrow-icon-filled"
                        alt=""
                        src="/arrow-icon-filled.svg"
                      />
                    </div>
                    <div className="px-drag-parent">
                      <img className="px-drag" alt="" src="/24px--drag1.svg" />
                      <img
                        className="settings-outline-icon"
                        alt=""
                        src="/settings-outline1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-child18" />
              </div>
              <div className="rectangle-parent5">
                <div className="group-child5" />
                <div className="input-parent12">
                  <div className="input16">
                    Select the Duration you want to see by
                  </div>
                  <div className="bg-group">
                    <div className="bg1" />
                    <div className="input17">Week</div>
                    <img
                      className="arrow-icon-filled1"
                      alt=""
                      src="/arrow-icon-filled1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent19">
              <div className="labelfilled-parent3">
                <div className="labelfilled5">
                  <b className="label95">33</b>
                </div>
                <div className="lmnop11">Not Started</div>
              </div>
              <div className="labelfilled-parent3">
                <div className="labelfilled6">
                  <b className="label95">33</b>
                </div>
                <div className="lmnop11">In Progress</div>
              </div>
              <div className="labelfilled-parent3">
                <div className="labelfilled7">
                  <b className="label95">33</b>
                </div>
                <div className="lmnop11">Completed</div>
              </div>
            </div>
            <div className="frame-parent20">
              <div className="frame-parent21">
                <div className="frame-parent22">
                  <div className="lmnop-parent1">
                    <div className="rank">25</div>
                    <div className="rank">20</div>
                    <div className="rank">15</div>
                    <div className="rank">10</div>
                    <div className="rank">5</div>
                    <div className="rank">0</div>
                  </div>
                  <div className="frame-parent23">
                    <div className="dividers-parent">
                      <img
                        className="dividers-icon"
                        alt=""
                        src="/dividers.svg"
                      />
                      <img
                        className="dividers-icon"
                        alt=""
                        src="/dividers1.svg"
                      />
                      <img
                        className="dividers-icon"
                        alt=""
                        src="/dividers2.svg"
                      />
                      <img
                        className="dividers-icon"
                        alt=""
                        src="/dividers3.svg"
                      />
                      <img
                        className="dividers-icon"
                        alt=""
                        src="/dividers4.svg"
                      />
                      <img
                        className="dividers-icon"
                        alt=""
                        src="/dividers.svg"
                      />
                    </div>
                    <div className="dividers-wrapper">
                      <img
                        className="dividers-icon6"
                        alt=""
                        src="/dividers5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="dividers-group">
                  <img className="dividers-icon7" alt="" src="/dividers6.svg" />
                  <img className="dividers-icon8" alt="" src="/dividers7.svg" />
                  <img className="dividers-icon9" alt="" src="/dividers8.svg" />
                  <img
                    className="dividers-icon10"
                    alt=""
                    src="/dividers9.svg"
                  />
                  <img
                    className="dividers-icon10"
                    alt=""
                    src="/dividers10.svg"
                  />
                  <img
                    className="dividers-icon9"
                    alt=""
                    src="/dividers11.svg"
                  />
                  <img
                    className="dividers-icon9"
                    alt=""
                    src="/dividers12.svg"
                  />
                  <img
                    className="dividers-icon10"
                    alt=""
                    src="/dividers13.svg"
                  />
                  <img
                    className="dividers-icon9"
                    alt=""
                    src="/dividers14.svg"
                  />
                  <img
                    className="dividers-icon10"
                    alt=""
                    src="/dividers15.svg"
                  />
                  <img
                    className="dividers-icon9"
                    alt=""
                    src="/dividers16.svg"
                  />
                  <img
                    className="dividers-icon10"
                    alt=""
                    src="/dividers17.svg"
                  />
                  <img
                    className="dividers-icon9"
                    alt=""
                    src="/dividers18.svg"
                  />
                </div>
              </div>
              <div className="frame-parent24">
                <div className="frame-parent25">
                  <div className="vector-parent1">
                    <img
                      className="frame-child19"
                      alt=""
                      src="/rectangle-30.svg"
                    />
                    <img
                      className="frame-child20"
                      alt=""
                      src="/rectangle-19.svg"
                    />
                    <img
                      className="frame-child21"
                      alt=""
                      src="/rectangle-29.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent3">
                    <div className="lmnop22">Sun</div>
                    <div className="lmnop23">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent25">
                  <div className="vector-parent1">
                    <img
                      className="frame-child22"
                      alt=""
                      src="/rectangle-301.svg"
                    />
                    <img
                      className="frame-child23"
                      alt=""
                      src="/rectangle-191.svg"
                    />
                    <img
                      className="frame-child24"
                      alt=""
                      src="/rectangle-291.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent5">
                    <div className="lmnop22">Mon</div>
                    <div className="lmnop27">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent25">
                  <div className="vector-parent1">
                    <img
                      className="frame-child25"
                      alt=""
                      src="/rectangle-302.svg"
                    />
                    <img
                      className="frame-child26"
                      alt=""
                      src="/rectangle-192.svg"
                    />
                    <img
                      className="frame-child27"
                      alt=""
                      src="/rectangle-292.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent7">
                    <div className="lmnop22">Tue</div>
                    <div className="lmnop31">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent28">
                  <div className="vector-parent1">
                    <img
                      className="frame-child28"
                      alt=""
                      src="/rectangle-303.svg"
                    />
                    <img
                      className="frame-child29"
                      alt=""
                      src="/rectangle-193.svg"
                    />
                    <img
                      className="frame-child30"
                      alt=""
                      src="/rectangle-293.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent5">
                    <div className="lmnop22">Wed</div>
                    <div className="lmnop27">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent25">
                  <div className="vector-parent1">
                    <img
                      className="frame-child31"
                      alt=""
                      src="/rectangle-304.svg"
                    />
                    <img
                      className="frame-child32"
                      alt=""
                      src="/rectangle-194.svg"
                    />
                    <img
                      className="frame-child33"
                      alt=""
                      src="/rectangle-294.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent3">
                    <div className="lmnop22">Thu</div>
                    <div className="lmnop23">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent25">
                  <div className="vector-parent1">
                    <img
                      className="frame-child28"
                      alt=""
                      src="/rectangle-305.svg"
                    />
                    <img
                      className="frame-child29"
                      alt=""
                      src="/rectangle-195.svg"
                    />
                    <img
                      className="frame-child36"
                      alt=""
                      src="/rectangle-295.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent13">
                    <div className="lmnop22">Fri</div>
                    <div className="lmnop43">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent28">
                  <div className="vector-parent1">
                    <img
                      className="frame-child31"
                      alt=""
                      src="/rectangle-306.svg"
                    />
                    <img
                      className="frame-child32"
                      alt=""
                      src="/rectangle-196.svg"
                    />
                    <img
                      className="frame-child33"
                      alt=""
                      src="/rectangle-296.svg"
                    />
                  </div>
                  <div className="lmnop-parent2">
                    <div className="lmnop20">Category 1</div>
                    <div className="lmnop21">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent15">
                    <div className="lmnop22">Sat</div>
                    <div className="lmnop47">(6 Courses)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lmnop-parent16">
              <div className="lmnop48">250</div>
              <div className="lmnop49">200</div>
              <div className="lmnop49">150</div>
              <div className="lmnop49">100</div>
              <div className="lmnop52">50</div>
            </div>
            <img className="dividers-icon20" alt="" src="/dividers19.svg" />
          </div>
        </div>
        <div className="top-departments-wrapper">
          <div className="top-departments">
            <div className="frame-parent32">
              <div className="frame-parent33">
                <div className="frame-parent34">
                  <div className="response-summary-parent">
                    <b className="response-summary">Response Summary</b>
                    <div className="label98">View All</div>
                    <img
                      className="input-child"
                      alt=""
                      src="/24px--drag2.svg"
                    />
                    <div className="frame-parent35">
                      <div className="group-parent8">
                        <img
                          className="dot-icon"
                          alt=""
                          src="/group-7618.svg"
                        />
                        <img
                          className="dot-icon"
                          alt=""
                          src="/settings-outline2.svg"
                        />
                      </div>
                      <div className="line-div" />
                      <div className="label99">Compare</div>
                      <div className="button-outline">
                        <div className="name">Compare</div>
                      </div>
                      <div className="dropdown">
                        <div className="input18">
                          <div className="bg" />
                          <div className="input-wrapper">
                            <div className="input15">Weekly</div>
                          </div>
                          <img
                            className="arrow-icon-filled"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                      </div>
                      <div className="filters">
                        <div className="input20">
                          <div className="accepting-responses">2021</div>
                          <img
                            className="upcoming-icon"
                            alt=""
                            src="/arrow-icon-filled2.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input20">
                          <div className="accepting-responses">January</div>
                          <img
                            className="upcoming-icon"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                          <img
                            className="input-child"
                            alt=""
                            src="/artboard-1.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled.svg"
                        />
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input20">
                          <div className="accepting-responses">Weekly</div>
                          <img
                            className="upcoming-icon"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input26">
                          <div className="label101">
                            <div className="label102">Days</div>
                          </div>
                          <div className="input-parent13">
                            <div className="accepting-responses">
                              Jan 1-Jan 7
                            </div>
                            <img
                              className="upcoming-icon"
                              alt=""
                              src="/arrow-icon-filled.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="input-child"
                          alt=""
                          src="/artboard-1.svg"
                        />
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled.svg"
                        />
                        <div className="chevron-left-parent">
                          <img
                            className="chevron-left-icon"
                            alt=""
                            src="/chevron-left.svg"
                          />
                          <div className="accepting-responses">
                            22 Jan 2021 - 28 Jan 2021
                          </div>
                          <img
                            className="chevron-left-icon"
                            alt=""
                            src="/chevron-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="label103">View All</div>
                  </div>
                  <div className="bottom-divider-onoff" />
                </div>
                <div className="tabs">
                  <div className="tab-data">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Employees</div>
                    </div>
                    <div className="onstate-onoff" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-child" />
                  </div>
                  <div className="tab-data2">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Instructors</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data2">
                    <div className="label-wrapper1">
                      <div className="displaying-5-of">Certifications</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tabs-child" />
                </div>
              </div>
              <div className="tabs">
                <div className="tabs1">
                  <div className="tab-data11">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Summaries</div>
                    </div>
                    <div className="onstate-onoff" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-child" />
                  </div>
                  <div className="tab-data13">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Question</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Top Certifications</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data13">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Individual</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tabs-item" />
                </div>
                <div className="tab-data22">
                  <div className="label-wrapper">
                    <div className="response-summary">View All</div>
                  </div>
                  <div className="tab-data-child" />
                </div>
              </div>
            </div>
            <div className="top">
              <div className="displaying-5-of-25-questions-wrapper">
                <div className="displaying-5-of">
                  Displaying 5 of 25 Questions
                </div>
              </div>
              <div className="input-parent14">
                <div className="input29">
                  <div className="bg" />
                  <div className="input-wrapper">
                    <div className="input15">Top</div>
                  </div>
                  <img
                    className="arrow-icon-filled"
                    alt=""
                    src="/arrow-icon-filled.svg"
                  />
                </div>
                <div className="input14">
                  <div className="bg" />
                  <div className="input-wrapper">
                    <div className="input15">Top Performers</div>
                  </div>
                  <img
                    className="arrow-icon-filled"
                    alt=""
                    src="/arrow-icon-filled.svg"
                  />
                </div>
                <div className="labelfilled-parent">
                  <img
                    className="table-controls-top-right-child"
                    alt=""
                    src="/group-26.svg"
                  />
                  <img className="table-icons" alt="" src="/table-icons.svg" />
                  <img
                    className="table-controls-top-right-child"
                    alt=""
                    src="/table-icons1.svg"
                  />
                  <div className="button" />
                  <img
                    className="table-controls-top-right-child"
                    alt=""
                    src="/table-icons2.svg"
                  />
                  <div className="view-icon">
                    <div className="spacer1" />
                    <img className="icon-tab" alt="" src="/icon-tab.svg" />
                    <img className="icon-tab" alt="" src="/icon-tab1.svg" />
                    <div className="icon-tab2" />
                    <div className="spacer1" />
                  </div>
                  <div className="table-controls-top-right-child">
                    <div className="bg5" />
                    <img className="check-icon" alt="" src="/check.svg" />
                  </div>
                  <div className="table-controls-top-right-child">
                    <div className="bg6" />
                    <img
                      className="check-icon"
                      alt=""
                      src="/close-button.svg"
                    />
                  </div>
                  <div className="outline-dropdown-buttons-seg" />
                  <div className="table-controls-top-right-child">
                    <div className="bg5" />
                    <img
                      className="check-icon"
                      alt=""
                      src="/filter-outline.svg"
                    />
                  </div>
                  <div className="table-controls-top-right-child">
                    <div className="bg8" />
                    <img
                      className="check-icon"
                      alt=""
                      src="/filter-outline1.svg"
                    />
                  </div>
                  <img
                    className="table-controls-top-right-child"
                    alt=""
                    src="/group-25.svg"
                  />
                  <div className="spacer" />
                </div>
                <div className="table-icons-parent">
                  <img
                    className="table-controls-top-right-child"
                    alt=""
                    src="/table-icons3.svg"
                  />
                  <img
                    className="table-controls-top-right-child"
                    alt=""
                    src="/table-icons4.svg"
                  />
                  <img className="table-icons" alt="" src="/table-icons5.svg" />
                </div>
              </div>
            </div>
            <div className="bottom-divider-onoff" />
            <div className="question-parent">
              <div className="question">Question</div>
              <div className="responses-parent">
                <div className="question">Responses</div>
                <div className="completion">Completion %</div>
              </div>
            </div>
            <div className="frame-parent36">
              <div className="bottom-divider-onoff-parent">
                <div className="bottom-divider-onoff" />
                <div className="frame-parent37">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name">{`Q1. What would be the best-suited solution to the above situation? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div8">10</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
                <div className="frame-parent37">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name">{`Q2. How often and why do you feel the need to indulge in a sport in this pandemic? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div8">5</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
                <div className="frame-parent37">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name">
                          Q3. What would you prefer from the following?
                        </div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div8">7</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
                <div className="frame-parent37">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name">
                          Q4. What membership benefits would you be looking for?
                        </div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div8">2</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
                <div className="frame-parent37">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name">{`Q5. Lorem Ipsum is simply dummy text of the printing and typesetting industry? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div8">8</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
                <div className="frame-parent52">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data5">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name10">{`Q6. Lorem Ipsum is simply dummy text ? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div23">4</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff" />
                <div className="frame-parent52">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data5">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name10">{`Q7. Lorem Ipsum is simply dummy text of the printing? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div23">5</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent52">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data5">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name10">{`Q8. Lorem Ipsum is simply dummy text of? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div23">3</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent52">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data5">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name10">{`Q6. What would be the best-suited solution to the above situation? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div23">8</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent52">
                  <div className="frame-parent38">
                    <div className="rank-parent">
                      <div className="rank">Rank</div>
                      <div className="div7">1</div>
                    </div>
                    <div className="table-data5">
                      <img
                        className="table-data-child"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent">
                        <div className="name10">{`Q6. What would be the best-suited solution to the above situation? `}</div>
                        <div className="completion">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent39">
                    <div className="time-utilized-parent">
                      <div className="time-utilized">Time Utilized</div>
                      <div className="div23">8</div>
                    </div>
                    <div className="completion-parent">
                      <div className="completion1">Completion %</div>
                      <div className="div9">92%</div>
                      <div className="learning">
                        <div className="rank">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-3-wrapper">
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="top-departments-container">
          <div className="top-departments1">
            <div className="frame-parent67">
              <div className="frame-parent68">
                <div className="frame-parent34">
                  <div className="response-summary-parent">
                    <b className="response-summary">User’s Performance</b>
                    <div className="label98">View All</div>
                    <img className="px-drag" alt="" src="/24px--drag3.svg" />
                    <div className="frame-parent35">
                      <div className="group-parent8">
                        <img
                          className="dot-icon"
                          alt=""
                          src="/group-7618.svg"
                        />
                        <img
                          className="dot-icon"
                          alt=""
                          src="/settings-outline2.svg"
                        />
                      </div>
                      <div className="line-div" />
                      <div className="label99">Compare</div>
                      <div className="button-outline">
                        <div className="name">Compare</div>
                      </div>
                      <div className="dropdown">
                        <div className="input18">
                          <div className="bg" />
                          <div className="input-wrapper">
                            <div className="input15">Weekly</div>
                          </div>
                          <img
                            className="arrow-icon-filled"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                      </div>
                      <div className="filters">
                        <div className="input20">
                          <div className="accepting-responses">2021</div>
                          <img
                            className="upcoming-icon"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input20">
                          <div className="accepting-responses">January</div>
                          <img
                            className="upcoming-icon"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                          <img
                            className="input-child"
                            alt=""
                            src="/artboard-1.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled.svg"
                        />
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input20">
                          <div className="accepting-responses">Weekly</div>
                          <img
                            className="upcoming-icon"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input26">
                          <div className="label101">
                            <div className="label102">Days</div>
                          </div>
                          <div className="input-parent13">
                            <div className="accepting-responses">
                              Jan 1-Jan 7
                            </div>
                            <img
                              className="upcoming-icon"
                              alt=""
                              src="/arrow-icon-filled.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="input-child"
                          alt=""
                          src="/artboard-1.svg"
                        />
                        <img
                          className="chevron-expand-icon"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled.svg"
                        />
                        <div className="chevron-left-parent">
                          <img
                            className="chevron-left-icon"
                            alt=""
                            src="/chevron-left.svg"
                          />
                          <div className="accepting-responses">
                            22 Jan 2021 - 28 Jan 2021
                          </div>
                          <img
                            className="chevron-left-icon"
                            alt=""
                            src="/chevron-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-divider-onoff" />
                </div>
                <div className="tabs">
                  <div className="tab-data">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Employees</div>
                    </div>
                    <div className="onstate-onoff" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-child" />
                  </div>
                  <div className="tab-data2">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Instructors</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data2">
                    <div className="label-wrapper1">
                      <div className="displaying-5-of">Certifications</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tabs-child" />
                </div>
              </div>
              <div className="tabs-group">
                <div className="tabs1">
                  <div className="tab-data34">
                    <div className="label-wrapper32">
                      <div className="displaying-5-of">Question Summary</div>
                    </div>
                    <div className="onstate-onoff3" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-child" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Question</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data37">
                    <div className="label-wrapper32">
                      <div className="displaying-5-of">
                        Individual Responses
                      </div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tab-data1">
                    <div className="label-wrapper">
                      <div className="displaying-5-of">Item</div>
                    </div>
                    <div className="tab-data-item" />
                  </div>
                  <div className="tabs-child1" />
                </div>
                <div className="input-parent16">
                  <div className="input29">
                    <div className="bg" />
                    <div className="input-wrapper">
                      <div className="input15">Top</div>
                    </div>
                    <img
                      className="arrow-icon-filled"
                      alt=""
                      src="/arrow-icon-filled.svg"
                    />
                  </div>
                  <div className="input14">
                    <div className="bg" />
                    <div className="input-wrapper">
                      <div className="input15">Top Performers</div>
                    </div>
                    <img
                      className="arrow-icon-filled"
                      alt=""
                      src="/arrow-icon-filled.svg"
                    />
                  </div>
                  <div className="frame-parent35">
                    <img
                      className="table-controls-top-right-child"
                      alt=""
                      src="/group-26.svg"
                    />
                    <img
                      className="table-icons"
                      alt=""
                      src="/table-icons.svg"
                    />
                    <img
                      className="table-controls-top-right-child"
                      alt=""
                      src="/table-icons1.svg"
                    />
                    <div className="button" />
                    <img
                      className="table-controls-top-right-child"
                      alt=""
                      src="/table-icons2.svg"
                    />
                    <div className="view-icon">
                      <div className="spacer1" />
                      <img className="icon-tab" alt="" src="/icon-tab.svg" />
                      <img className="icon-tab" alt="" src="/icon-tab1.svg" />
                      <div className="icon-tab2" />
                      <div className="spacer1" />
                    </div>
                    <div className="table-controls-top-right-child">
                      <div className="bg5" />
                      <img className="check-icon" alt="" src="/check.svg" />
                    </div>
                    <div className="table-controls-top-right-child">
                      <div className="bg6" />
                      <img
                        className="check-icon"
                        alt=""
                        src="/close-button1.svg"
                      />
                    </div>
                    <div className="outline-dropdown-buttons-seg" />
                    <div className="table-controls-top-right-child">
                      <div className="bg5" />
                      <img
                        className="check-icon"
                        alt=""
                        src="/filter-outline.svg"
                      />
                    </div>
                    <div className="table-controls-top-right-child">
                      <div className="bg8" />
                      <img
                        className="check-icon"
                        alt=""
                        src="/filter-outline1.svg"
                      />
                    </div>
                    <img
                      className="table-controls-top-right-child"
                      alt=""
                      src="/group-251.svg"
                    />
                    <div className="spacer" />
                  </div>
                  <div className="table-icons-parent">
                    <img
                      className="table-controls-top-right-child"
                      alt=""
                      src="/table-icons3.svg"
                    />
                    <img
                      className="table-controls-top-right-child"
                      alt=""
                      src="/table-icons4.svg"
                    />
                    <img
                      className="table-icons"
                      alt=""
                      src="/table-icons5.svg"
                    />
                  </div>
                </div>
                <div className="tab-data45">
                  <div className="label-wrapper">
                    <div className="response-summary">View All</div>
                  </div>
                  <div className="tab-data-child" />
                </div>
              </div>
            </div>
            <div className="question-group">
              <div className="question">Question</div>
              <div className="responses-parent">
                <div className="question">Responses</div>
                <div className="completion">Completion %</div>
              </div>
            </div>
            <div className="frame-parent71">
              <div className="frame-parent72">
                <div className="frame-parent73">
                  <div className="frame-parent74">
                    <div className="frame-parent75">
                      <div className="labelfilled-parent">
                        <img className="png-1-icon" alt="" src="/png-1.svg" />
                        <div className="displaying-5-of">CSV</div>
                      </div>
                      <img
                        className="edit-outline-icon"
                        alt=""
                        src="/download-outline.svg"
                      />
                    </div>
                    <div className="frame-parent75">
                      <div className="labelfilled-parent">
                        <img className="px-check" alt="" src="/excel.svg" />
                        <div className="displaying-5-of">XLS</div>
                      </div>
                      <img
                        className="edit-outline-icon"
                        alt=""
                        src="/download-outline.svg"
                      />
                    </div>
                    <div className="displaying-3-of">
                      Displaying 3 of 3 Departments
                    </div>
                    <div className="input48">
                      <div className="bg" />
                      <div className="input-wrapper">
                        <div className="input15">Pending Approvals</div>
                      </div>
                      <img
                        className="arrow-icon-filled"
                        alt=""
                        src="/arrow-icon-filled.svg"
                      />
                    </div>
                  </div>
                  <div className="label-group">
                    <div className="label167">Add New</div>
                    <div className="displaying-8-of">
                      Displaying 8 of 16 Individuals
                    </div>
                    <img
                      className="settings-outline-icon"
                      alt=""
                      src="/close-button1.svg"
                    />
                    <div className="input50">
                      <div className="bg" />
                      <div className="input-wrapper">
                        <div className="input15">Approved Goals</div>
                      </div>
                      <img
                        className="arrow-icon-filled"
                        alt=""
                        src="/arrow-icon-filled.svg"
                      />
                    </div>
                    <img
                      className="table-icons"
                      alt=""
                      src="/table-icons5.svg"
                    />
                  </div>
                  <div className="frame-wrapper1">
                    <div className="property-1rafiq-parent">
                      <div className="property-1rafiq">
                        <div className="model-header">
                          <div className="individuals-34-parent">
                            <b className="displaying-5-of">
                              <span>{`Individuals `}</span>
                              <span className="span">(34)</span>
                            </b>
                            <div className="label168">Add New</div>
                            <img
                              className="settings-outline-icon"
                              alt=""
                              src="/close-button2.svg"
                            />
                          </div>
                          <div className="model-header-child" />
                        </div>
                        <div className="add" />
                        <div className="frame-parent77">
                          <div className="group-tile-parent">
                            <div className="group-tile">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q1.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q2.</div>
                              <div className="name">
                                How often and why do you feel ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q3.</div>
                              <div className="name">
                                Please submit the supporting file...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q4.</div>
                              <div className="name">
                                How would you rate your experi ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q5.</div>
                              <div className="name">
                                Select a date you would want the ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q6.</div>
                              <div className="name">
                                How would you rate your experi ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q7.</div>
                              <div className="name">
                                How would you rate your experi ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q8.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q9.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q10.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q10.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q10.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q10.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile1">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="name">Q10.</div>
                              <div className="name">
                                What would be the best-suited ...
                              </div>
                            </div>
                          </div>
                          <div className="image-3-container">
                            <img
                              className="image-3-icon1"
                              alt=""
                              src="/image-31@2x.png"
                            />
                          </div>
                        </div>
                        <div className="add" />
                      </div>
                      <div className="property-1rafiq1">
                        <div className="model-header">
                          <div className="individuals-34-parent">
                            <b className="displaying-5-of">
                              <span>{`Departments `}</span>
                              <span className="span">(3)</span>
                            </b>
                            <div className="label168">Add New</div>
                            <img
                              className="settings-outline-icon"
                              alt=""
                              src="/close-button2.svg"
                            />
                          </div>
                          <div className="model-header-child" />
                        </div>
                        <div className="add" />
                        <div className="frame-parent78">
                          <div className="group-tile-parent">
                            <div className="group-tile14">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="accepting-responses">
                                Department 1
                              </div>
                              <div className="status-tile">
                                <img
                                  className="finished-icon"
                                  alt=""
                                  src="/finished.svg"
                                />
                                <div className="rank">Approved</div>
                              </div>
                            </div>
                            <div className="group-tile14">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="accepting-responses">
                                Department 2
                              </div>
                              <div className="status-tile">
                                <img
                                  className="finished-icon"
                                  alt=""
                                  src="/finished.svg"
                                />
                                <div className="rank">Approved</div>
                              </div>
                            </div>
                            <div className="group-tile16">
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="accepting-responses">Org 3</div>
                              <div className="status-tile2">
                                <img
                                  className="upcoming-icon"
                                  alt=""
                                  src="/upcoming.svg"
                                />
                                <div className="rank">Pending</div>
                              </div>
                            </div>
                            <div className="group-tile17">
                              <div className="selections-30-parent">
                                <img
                                  className="settings-outline-icon"
                                  alt=""
                                  src="/selections-301.svg"
                                />
                                <div className="accepting-responses">
                                  Goal Title 4
                                </div>
                              </div>
                              <div className="frame-parent79">
                                <div className="parent">
                                  <div className="name10">24</div>
                                  <div className="users">Users</div>
                                </div>
                                <img
                                  className="dot-icon"
                                  alt=""
                                  src="/6-dot.svg"
                                />
                              </div>
                            </div>
                            <div className="group-tile17">
                              <div className="selections-30-parent">
                                <img
                                  className="settings-outline-icon"
                                  alt=""
                                  src="/selections-301.svg"
                                />
                                <div className="accepting-responses">
                                  Goal Title 5
                                </div>
                              </div>
                              <div className="frame-parent79">
                                <div className="parent">
                                  <div className="name10">24</div>
                                  <div className="users">Users</div>
                                </div>
                                <img
                                  className="dot-icon"
                                  alt=""
                                  src="/6-dot.svg"
                                />
                              </div>
                            </div>
                            <div className="group-tile19">
                              <div className="selections-30-parent">
                                <img
                                  className="settings-outline-icon"
                                  alt=""
                                  src="/selections-30.svg"
                                />
                                <div className="accepting-responses">
                                  Goal Title 6
                                </div>
                              </div>
                              <div className="frame-parent79">
                                <div className="parent">
                                  <div className="name10">24</div>
                                  <div className="users">Users</div>
                                </div>
                                <img
                                  className="dot-icon"
                                  alt=""
                                  src="/6-dot.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="image-3-container">
                            <img
                              className="image-3-icon2"
                              alt=""
                              src="/image-31@2x.png"
                            />
                          </div>
                        </div>
                        <div className="add" />
                      </div>
                      <div className="frame-child43" />
                      <div className="model-header-parent">
                        <div className="model-header2">
                          <div className="response-summary-group">
                            <b className="displaying-5-of">Response Summary</b>
                            <div className="label168">Add New</div>
                            <img
                              className="settings-outline-icon"
                              alt=""
                              src="/close-button1.svg"
                            />
                            <div className="chevron-right-parent">
                              <img
                                className="edit-outline-icon"
                                alt=""
                                src="/chevron-right1.svg"
                              />
                              <img
                                className="edit-outline-icon"
                                alt=""
                                src="/chevron-right2.svg"
                              />
                            </div>
                            <div className="chevron-right-group">
                              <img
                                className="chevron-right-icon4"
                                alt=""
                                src="/chevron-right3.svg"
                              />
                              <img
                                className="edit-outline-icon"
                                alt=""
                                src="/chevron-right4.svg"
                              />
                            </div>
                          </div>
                          <div className="model-header-child" />
                        </div>
                        <div className="model-department-manager">
                          <div className="organizational-goal-tile">
                            <div className="frame-parent82">
                              <div className="frame-parent83">
                                <div className="labelfilled-parent">
                                  <img
                                    className="selections-30-icon20"
                                    alt=""
                                    src="/selections-302.svg"
                                  />
                                  <div className="goal-title-1-parent">
                                    <div className="goal-title-1">
                                      Goal Title 1
                                    </div>
                                    <div className="frame-parent84">
                                      <div className="chevron-right-group">
                                        <img
                                          className="frame-child44"
                                          alt=""
                                          src="/group-70203.svg"
                                        />
                                        <div className="label-parent1">
                                          <div className="rank">
                                            Target Date
                                          </div>
                                          <div className="input-parent17">
                                            <b className="input52">
                                              2022-12-12
                                            </b>
                                            <div className="tags13">
                                              <div className="rank">
                                                2022-01-01
                                              </div>
                                            </div>
                                            <div className="input53">
                                              -01-01
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="abcdef">
                                        Overdue: 1 Year ago
                                      </div>
                                    </div>
                                    <div className="table-data-parent">
                                      <div className="table-data10">
                                        <img
                                          className="table-data-child8"
                                          alt=""
                                          src="/ellipse-597@2x.png"
                                        />
                                        <div className="name">Jakob Mango</div>
                                      </div>
                                      <div className="frame-child45" />
                                      <div className="time-outline-parent">
                                        <img
                                          className="dot-icon"
                                          alt=""
                                          src="/time-outline.svg"
                                        />
                                        <div className="input52">
                                          2021-09-01 • 10:56
                                        </div>
                                      </div>
                                      <div className="frame-child45" />
                                      <div className="learning10">
                                        <div className="rank">Mandatory</div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent85">
                                  <div className="view-details-parent">
                                    <img
                                      className="settings-outline-icon"
                                      alt=""
                                      src="/view-details.svg"
                                    />
                                    <img
                                      className="settings-outline-icon"
                                      alt=""
                                      src="/edit-outline2.svg"
                                    />
                                    <img
                                      className="input-child"
                                      alt=""
                                      src="/iconsoutlinearchive.svg"
                                    />
                                    <img
                                      className="dot-icon"
                                      alt=""
                                      src="/close-button3.svg"
                                    />
                                  </div>
                                  <div className="indicator-icons-goals-wrapper">
                                    <div className="indicator-icons-goals">
                                      <img
                                        className="chevron-expand-icon"
                                        alt=""
                                        src="/star.svg"
                                      />
                                      <div className="question">
                                        Organizational Goal
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h1-medium-24px-wrapper">
                                <div className="h1-medium4">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </div>
                              </div>
                            </div>
                            <div className="tab-data-child" />
                            <div className="organizational-goal-tile-inner">
                              <div className="chevron-right-group">
                                <div className="button-outline2">
                                  <div className="name">Update Status</div>
                                </div>
                                <div className="button2">
                                  <div className="name">Publish</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tabs">
                            <div className="tab-data">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Approved</div>
                              </div>
                              <div className="onstate-onoff" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-child" />
                            </div>
                            <div className="tab-data2">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Pending</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data2">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Rejected</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tab-data1">
                              <div className="label-wrapper">
                                <div className="displaying-5-of">Item</div>
                              </div>
                              <div className="tab-data-item" />
                            </div>
                            <div className="tabs-child" />
                          </div>
                          <div className="model-header3">
                            <div className="department-goals-3-parent">
                              <b className="displaying-5-of">
                                <span>{`Department Goals `}</span>
                                <span className="span">(3)</span>
                              </b>
                              <div className="label168">Add New</div>
                              <img
                                className="settings-outline-icon"
                                alt=""
                                src="/close-button2.svg"
                              />
                              <img
                                className="dot-icon"
                                alt=""
                                src="/edit-outline3.svg"
                              />
                            </div>
                            <div className="tab-data-item" />
                          </div>
                          <div className="bottom-divider-onoff-group">
                            <div className="bottom-divider-onoff" />
                            <div className="frame-parent86">
                              <div className="frame-parent87">
                                <div className="frame-parent38">
                                  <div className="rank-parent">
                                    <div className="rank">Rank</div>
                                    <div className="div7">1</div>
                                  </div>
                                  <div className="table-data">
                                    <img
                                      className="table-data-child"
                                      alt=""
                                      src="/ellipse-1@2x.png"
                                    />
                                    <div className="name-parent">
                                      <div className="name">
                                        <span className="started-on">
                                          Started On
                                        </span>
                                        <b> :</b>
                                        <span>
                                          {" "}
                                          Monday, February 21, 2022 3:43:52 PM
                                        </span>
                                      </div>
                                      <div className="completion">
                                        jack.matthew@rakuten.com
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent39">
                                  <div className="time-utilized-wrapper">
                                    <div className="time-utilized">
                                      Time Utilized
                                    </div>
                                  </div>
                                  <div className="completion-parent">
                                    <div className="completion1">
                                      Completion %
                                    </div>
                                    <div className="div9">92%</div>
                                    <div className="learning">
                                      <div className="rank">98%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="group-parent11">
                                <div className="group-parent12">
                                  <div className="group-wrapper8">
                                    <div className="bg-container">
                                      <img
                                        className="bg-icon1"
                                        alt=""
                                        src="/bg1.svg"
                                      />
                                      <div className="settings-outline-parent">
                                        <img
                                          className="dot-icon"
                                          alt=""
                                          src="/settings-outline3.svg"
                                        />
                                        <img
                                          className="expand-icon"
                                          alt=""
                                          src="/expand.svg"
                                        />
                                      </div>
                                      <div className="group-child6" />
                                      <div className="abcdef-parent">
                                        <b className="accepting-responses">
                                          User Expiration
                                        </b>
                                        <img
                                          className="input-child"
                                          alt=""
                                          src="/info-outline.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-child7" />
                                  <div className="group-child8" />
                                  <b className="total-count3">822</b>
                                  <div className="optional-label3">
                                    Total User
                                  </div>
                                  <div className="group-wrapper9">
                                    <div className="bg-parent1">
                                      <div className="bg18" />
                                      <div className="input54">In 7 Days</div>
                                      <img
                                        className="arrow-icon-filled18"
                                        alt=""
                                        src="/arrow-icon-filled2.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent90">
                                  <div className="frame-parent91">
                                    <div className="start-spacer-parent">
                                      <div className="start-spacer">
                                        <div className="start-spacer-child" />
                                        <div className="column-start-mark-hide-norma" />
                                      </div>
                                      <img
                                        className="frame-child47"
                                        alt=""
                                        src="/group-13498.svg"
                                      />
                                      <div className="end-spacer">
                                        <div className="end-spacer-child" />
                                        <div className="column-end-mark-hide-normall" />
                                      </div>
                                      <div className="labelfilled-parent3">
                                        <div className="lmnop">
                                          Inventory Mgt
                                        </div>
                                        <div className="icons" />
                                      </div>
                                    </div>
                                    <div className="start-spacer-parent">
                                      <div className="start-spacer">
                                        <div className="start-spacer-child" />
                                        <div className="column-start-mark-hide-norma" />
                                      </div>
                                      <img
                                        className="frame-child47"
                                        alt=""
                                        src="/group-13499.svg"
                                      />
                                      <div className="end-spacer">
                                        <div className="end-spacer-child" />
                                        <div className="column-end-mark-hide-normall" />
                                      </div>
                                      <div className="labelfilled-parent3">
                                        <div className="lmnop">Faults</div>
                                        <div className="icons" />
                                      </div>
                                    </div>
                                    <div className="start-spacer-parent">
                                      <div className="start-spacer">
                                        <div className="start-spacer-child" />
                                        <div className="column-start-mark-hide-norma" />
                                      </div>
                                      <img
                                        className="frame-child47"
                                        alt=""
                                        src="/group-13500.svg"
                                      />
                                      <div className="end-spacer">
                                        <div className="end-spacer-child" />
                                        <div className="column-end-mark-hide-normall" />
                                      </div>
                                      <div className="labelfilled-parent3">
                                        <div className="lmnop">
                                          Configuration
                                        </div>
                                        <div className="icons" />
                                      </div>
                                    </div>
                                    <div className="start-spacer-parent">
                                      <div className="start-spacer">
                                        <div className="start-spacer-child" />
                                        <div className="column-start-mark-hide-norma" />
                                      </div>
                                      <img
                                        className="frame-child47"
                                        alt=""
                                        src="/group-134981.svg"
                                      />
                                      <div className="end-spacer">
                                        <div className="end-spacer-child" />
                                        <div className="column-end-mark-hide-normall" />
                                      </div>
                                      <div className="labelfilled-parent3">
                                        <div className="lmnop">Performance</div>
                                        <div className="icons" />
                                      </div>
                                    </div>
                                  </div>
                                  <b className="lmnop53">200</b>
                                  <b className="lmnop54">198</b>
                                  <b className="lmnop55">134</b>
                                  <b className="lmnop56">130</b>
                                  <b className="lmnop57">130</b>
                                  <div className="group-child9" />
                                  <div className="group-child10" />
                                  <div className="group-child11" />
                                  <div className="group-child12" />
                                  <div className="group-child13" />
                                  <img
                                    className="dividers-icon21"
                                    alt=""
                                    src="/dividers20.svg"
                                  />
                                  <div className="group-child14" />
                                  <div className="group-child15" />
                                  <div className="group-child16" />
                                </div>
                                <div className="start-spacer-parent2">
                                  <div className="start-spacer">
                                    <div className="start-spacer-child" />
                                    <div className="column-start-mark-hide-norma" />
                                  </div>
                                  <img
                                    className="frame-child47"
                                    alt=""
                                    src="/group-134982.svg"
                                  />
                                  <div className="end-spacer">
                                    <div className="end-spacer-child" />
                                    <div className="column-end-mark-hide-normall" />
                                  </div>
                                  <div className="labelfilled-parent3">
                                    <div className="lmnop">Tribe</div>
                                    <div className="icons" />
                                  </div>
                                </div>
                                <div className="rectangle-parent6">
                                  <div className="group-child17" />
                                  <div className="group-child18" />
                                  <div className="lmnop58">Active User</div>
                                  <div className="lmnop59">
                                    In Active for more than 30 day
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-divider-onoff11" />
                            <div className="bottom-divider-onoff11" />
                            <div className="frame-parent86">
                              <div className="frame-parent87">
                                <div className="frame-parent38">
                                  <div className="rank-parent">
                                    <div className="rank">Rank</div>
                                    <div className="div7">1</div>
                                  </div>
                                  <div className="table-data">
                                    <img
                                      className="table-data-child"
                                      alt=""
                                      src="/ellipse-1@2x.png"
                                    />
                                    <div className="name-parent">
                                      <div className="name">
                                        <b>{`Time Spent :                      `}</b>
                                        <span>{`00:00:11 `}</span>
                                      </div>
                                      <div className="completion">
                                        jack.matthew@rakuten.com
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent39">
                                  <div className="time-utilized-wrapper">
                                    <div className="time-utilized">
                                      Time Utilized
                                    </div>
                                  </div>
                                  <div className="completion-parent">
                                    <div className="completion1">
                                      Completion %
                                    </div>
                                    <div className="div9">92%</div>
                                    <div className="learning">
                                      <div className="rank">98%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-parent2">
                                <img
                                  className="bg-icon2"
                                  alt=""
                                  src="/bg2.svg"
                                />
                                <div className="group-wrapper10">
                                  <div className="group1">
                                    <img
                                      className="variable-segments-circle"
                                      alt=""
                                      src="/variable-segments-circle.svg"
                                    />
                                    <b className="lmnop60">2000</b>
                                    <div className="optional-label4">Total</div>
                                  </div>
                                </div>
                                <div className="group-parent13">
                                  <div className="labelfilled-parent6">
                                    <div className="labelfilled8">
                                      <b className="rank">400</b>
                                    </div>
                                    <div className="lmnop61">Local Users</div>
                                  </div>
                                  <div className="labelfilled9">
                                    <b className="rank">{`900 `}</b>
                                  </div>
                                  <div className="lmnop62">Rakuten Id</div>
                                  <div className="labelfilled10">
                                    <b className="rank">60%</b>
                                  </div>
                                  <div className="lmnop63">Intra</div>
                                </div>
                                <div className="settings-outline-group">
                                  <img
                                    className="dot-icon"
                                    alt=""
                                    src="/settings-outline4.svg"
                                  />
                                  <img
                                    className="dot-icon"
                                    alt=""
                                    src="/expand1.svg"
                                  />
                                </div>
                                <div className="group-child19" />
                                <div className="abcdef-group">
                                  <b className="accepting-responses">
                                    Unknown Login Attempt
                                  </b>
                                  <img
                                    className="input-child"
                                    alt=""
                                    src="/info-outline1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bottom-divider-onoff11" />
                            <div className="bottom-divider-onoff11" />
                            <div className="frame-wrapper2">
                              <div className="frame-wrapper3">
                                <div className="frame-parent96">
                                  <div className="frame-parent97">
                                    <div className="frame-parent38">
                                      <div className="rank-parent">
                                        <div className="rank">Rank</div>
                                        <div className="div7">1</div>
                                      </div>
                                      <div className="table-data13">
                                        <img
                                          className="table-data-child"
                                          alt=""
                                          src="/ellipse-1@2x.png"
                                        />
                                        <div className="name-parent">
                                          <div className="name10">{`Q1. What would be the best-suited solution to the above situation? `}</div>
                                          <div className="name55">
                                            jack.matthew@rakuten.com
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-parent39">
                                      <div className="time-utilized-wrapper">
                                        <div className="time-utilized">
                                          Time Utilized
                                        </div>
                                      </div>
                                      <div className="completion-parent">
                                        <div className="completion1">
                                          Completion %
                                        </div>
                                        <div className="div9">92%</div>
                                        <div className="learning">
                                          <div className="rank">98%</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-wrapper11">
                                    <div className="group-wrapper12">
                                      <div className="group-wrapper12">
                                        <img
                                          className="bg-icon3"
                                          alt=""
                                          src="/bg3.svg"
                                        />
                                        <div className="group-parent14">
                                          <div className="lmnop-parent17">
                                            <div className="lmnop64">200</div>
                                            <div className="lmnop65">150</div>
                                            <div className="lmnop66">100</div>
                                            <div className="lmnop67">50</div>
                                            <div className="lmnop68">10</div>
                                          </div>
                                          <div className="dividers-container">
                                            <img
                                              className="dividers-icon22"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon22"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon22"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon22"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon22"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                          </div>
                                          <div className="lmnop69">08/08</div>
                                          <div className="lmnop70">08/08</div>
                                          <div className="lmnop71">08/08</div>
                                          <div className="lmnop72">08/08</div>
                                          <div className="lmnop73">08/08</div>
                                          <div className="lmnop74">08/08</div>
                                          <div className="lmnop75">08/08</div>
                                        </div>
                                        <img
                                          className="vector-icon"
                                          alt=""
                                          src="/vector-9.svg"
                                        />
                                        <img
                                          className="group-child20"
                                          alt=""
                                          src="/vector-10.svg"
                                        />
                                        <img
                                          className="group-child21"
                                          alt=""
                                          src="/vector-11.svg"
                                        />
                                        <img
                                          className="group-child22"
                                          alt=""
                                          src="/vector-12.svg"
                                        />
                                        <img
                                          className="group-child23"
                                          alt=""
                                          src="/vector-13.svg"
                                        />
                                        <div className="settings-outline-container">
                                          <img
                                            className="dot-icon"
                                            alt=""
                                            src="/settings-outline5.svg"
                                          />
                                          <img
                                            className="dot-icon"
                                            alt=""
                                            src="/expand2.svg"
                                          />
                                        </div>
                                        <div className="group-child24" />
                                        <div className="abcdef-container">
                                          <b className="accepting-responses">
                                            Dormant Accounts
                                          </b>
                                          <img
                                            className="input-child"
                                            alt=""
                                            src="/info-outline1.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-divider-onoff11" />
                          </div>
                          <div className="frame-parent100">
                            <div className="bottom-divider-onoff-container">
                              <div className="bottom-divider-onoff11" />
                              <div className="group-parent15">
                                <div className="group-parent16">
                                  <div className="group-parent16">
                                    <div className="group-parent16">
                                      <img
                                        className="bg-icon4"
                                        alt=""
                                        src="/bg4.svg"
                                      />
                                      <div className="settings-outline-parent1">
                                        <img
                                          className="settings-outline-icon"
                                          alt=""
                                          src="/settings-outline6.svg"
                                        />
                                        <img
                                          className="expand-icon"
                                          alt=""
                                          src="/expand3.svg"
                                        />
                                      </div>
                                      <div className="group-child25" />
                                      <div className="abcdef-parent1">
                                        <b className="accepting-responses">
                                          933 Responses
                                        </b>
                                        <img
                                          className="input-child"
                                          alt=""
                                          src="/info-outline2.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-wrapper14">
                                    <div className="bg-parent5">
                                      <div className="bg19" />
                                      <div className="input55">In 7 Days</div>
                                      <img
                                        className="arrow-icon-filled19"
                                        alt=""
                                        src="/arrow-icon-filled3.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="group-parent17">
                                  <div className="frame-parent101">
                                    <div className="frame-parent91">
                                      <div className="start-spacer-parent">
                                        <div className="start-spacer">
                                          <div className="start-spacer-child" />
                                          <div className="column-start-mark-hide-norma" />
                                        </div>
                                        <img
                                          className="frame-child52"
                                          alt=""
                                          src="/group-134983.svg"
                                        />
                                        <div className="end-spacer">
                                          <div className="end-spacer-child" />
                                          <div className="column-end-mark-hide-normall" />
                                        </div>
                                        <div className="labelfilled-parent3">
                                          <div className="lmnop">
                                            Inventory Mgt
                                          </div>
                                          <div className="icons" />
                                        </div>
                                      </div>
                                      <div className="start-spacer-parent">
                                        <div className="start-spacer">
                                          <div className="start-spacer-child" />
                                          <div className="column-start-mark-hide-norma" />
                                        </div>
                                        <img
                                          className="frame-child52"
                                          alt=""
                                          src="/group-134991.svg"
                                        />
                                        <div className="end-spacer">
                                          <div className="end-spacer-child" />
                                          <div className="column-end-mark-hide-normall" />
                                        </div>
                                        <div className="labelfilled-parent3">
                                          <div className="lmnop">Faults</div>
                                          <div className="icons" />
                                        </div>
                                      </div>
                                      <div className="start-spacer-parent">
                                        <div className="start-spacer">
                                          <div className="start-spacer-child" />
                                          <div className="column-start-mark-hide-norma" />
                                        </div>
                                        <img
                                          className="frame-child52"
                                          alt=""
                                          src="/group-135001.svg"
                                        />
                                        <div className="end-spacer">
                                          <div className="end-spacer-child" />
                                          <div className="column-end-mark-hide-normall" />
                                        </div>
                                        <div className="labelfilled-parent3">
                                          <div className="lmnop">
                                            Configuration
                                          </div>
                                          <div className="icons" />
                                        </div>
                                      </div>
                                      <div className="start-spacer-parent">
                                        <div className="start-spacer">
                                          <div className="start-spacer-child" />
                                          <div className="column-start-mark-hide-norma" />
                                        </div>
                                        <img
                                          className="frame-child52"
                                          alt=""
                                          src="/group-134984.svg"
                                        />
                                        <div className="end-spacer">
                                          <div className="end-spacer-child" />
                                          <div className="column-end-mark-hide-normall" />
                                        </div>
                                        <div className="labelfilled-parent3">
                                          <div className="lmnop">
                                            Performance
                                          </div>
                                          <div className="icons" />
                                        </div>
                                      </div>
                                    </div>
                                    <b className="lmnop76">200</b>
                                    <b className="lmnop77">198</b>
                                    <b className="lmnop78">134</b>
                                    <b className="lmnop79">130</b>
                                    <b className="lmnop80">130</b>
                                    <div className="group-child26" />
                                    <div className="group-child27" />
                                    <div className="group-child28" />
                                    <img
                                      className="dividers-icon27"
                                      alt=""
                                      src="/dividers22.svg"
                                    />
                                    <div className="group-child29" />
                                    <div className="group-child30" />
                                    <div className="group-child31" />
                                  </div>
                                  <div className="start-spacer-parent7">
                                    <div className="start-spacer">
                                      <div className="start-spacer-child" />
                                      <div className="column-start-mark-hide-norma" />
                                    </div>
                                    <img
                                      className="frame-child52"
                                      alt=""
                                      src="/group-134985.svg"
                                    />
                                    <div className="end-spacer">
                                      <div className="end-spacer-child" />
                                      <div className="column-end-mark-hide-normall" />
                                    </div>
                                    <div className="labelfilled-parent3">
                                      <div className="lmnop">Tribe</div>
                                      <div className="icons" />
                                    </div>
                                  </div>
                                </div>
                                <div className="rectangle-parent7">
                                  <div className="group-child32" />
                                  <div className="lmnop81">Active User</div>
                                </div>
                              </div>
                            </div>
                            <div className="image-3-wrapper">
                              <img
                                className="image-3-icon"
                                alt=""
                                src="/image-3@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="model-footer">
                          <div className="button-outline-group">
                            <div className="button-outline2">
                              <div className="name">Reject</div>
                            </div>
                            <div className="button2">
                              <div className="name">Approve</div>
                            </div>
                          </div>
                          <img
                            className="dividers-icon28"
                            alt=""
                            src="/dividers23.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff11" />
              </div>
              <div className="image-3-wrapper">
                <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb1">
        <div className="item-11" onClick={onItem1TextClick}>
          Surveys
        </div>
        <img className="px-drag" alt="" src="/chevronright.svg" />
        <div className="time-utilized">...</div>
        <img className="input-child" alt="" src="/chevronright1.svg" />
        <div className="item-31">Reports</div>
      </div>
      <div className="topnavigation1">
        <div className="lhs1">
          <img className="logo-icon1" alt="" src="/logo.svg" />
          <div className="breadcrumb2">
            <div className="rank">Dashboard</div>
            <img
              className="px-drag"
              alt=""
              src="/iconschevron-right-black-24dp2.svg"
            />
            <div className="time-utilized">...</div>
            <img
              className="input-child"
              alt=""
              src="/iconschevron-right-black-24dp3.svg"
            />
            <div className="item-31">View Details</div>
          </div>
        </div>
        <div className="rhs1">
          <div className="notification1">
            <img
              className="iconsnotification-24dp1"
              alt=""
              src="/iconsnotification-24dp.svg"
            />
            <div className="dotinitial1">
              <div className="div48">1</div>
            </div>
          </div>
          <div className="profilecircleinitial13">
            <div className="aa13">AA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task12;
