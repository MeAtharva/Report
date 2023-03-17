import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./task16.css";

const Task16 = () => {
  const navigate = useNavigate();

  const onSwitchIconClick = useCallback(() => {
    navigate("/task-12");
  }, [navigate]);

  const onItem1TextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="task-16">
      <div className="sidenavigation2">
        <div className="navoption4">
          <img className="task-icon2" alt="" src="/task.svg" />
        </div>
        <div className="navoption5">
          <img className="task-icon2" alt="" src="/dashboard2.svg" />
        </div>
      </div>
      <div className="event-heading-creator-group">
        <div className="event-heading-creator1">
          <div className="event-heading-creator-inner1">
            <div className="group-wrapper15">
              <div className="group-wrapper15">
                <img className="bg-icon5" alt="" src="/bg.svg" />
                <div className="buttonoutline-button-container">
                  <div className="buttonoutline-button2">
                    <div className="content18">
                      <img
                        className="edit-outline-icon4"
                        alt=""
                        src="/edit-outline.svg"
                      />
                      <div className="label199">Edit</div>
                      <img
                        className="right-side-icon-onoff2"
                        alt=""
                        src="/right-side-icon-onoff.svg"
                      />
                    </div>
                  </div>
                  <div className="lock-fill-1-group">
                    <img
                      className="lock-fill-11"
                      alt=""
                      src="/lock-fill-11.svg"
                    />
                    <div className="input-parent18">
                      <b className="input56">Public</b>
                      <div className="label200">Access</div>
                    </div>
                  </div>
                </div>
                <div className="buttonoutline-button-parent1">
                  <div className="buttonoutline-button2">
                    <div className="content19">
                      <img
                        className="edit-outline-icon5"
                        alt=""
                        src="/edit-outline1.svg"
                      />
                      <img
                        className="right-side-icon-onoff2"
                        alt=""
                        src="/right-side-icon-onoff1.svg"
                      />
                    </div>
                  </div>
                  <div className="px-check-group">
                    <img className="px-check1" alt="" src="/24px--check1.svg" />
                    <div className="input-parent19">
                      <b className="input56">Upcoming</b>
                      <div className="label201">Status</div>
                    </div>
                  </div>
                </div>
                <div className="label-parent2">
                  <div className="label202">Survey Name</div>
                  <div className="h1-medium5">Assign Sales Consultant</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-parent18">
            <div className="input-parent20">
              <div className="input58">2020-01-27 • 01 : 30 PM</div>
              <div className="label203">Start on</div>
            </div>
            <img className="group-child33" alt="" src="/group-7026.svg" />
          </div>
          <div className="event-heading-creator-inner2">
            <div className="group-wrapper16">
              <div className="group-wrapper16">
                <div className="input-parent21">
                  <div className="input58">Jack Matthew</div>
                  <div className="label203">Created By</div>
                </div>
                <img className="group-child34" alt="" src="/group-70221.svg" />
              </div>
            </div>
          </div>
          <div className="frame-parent103">
            <div className="group-wrapper17">
              <div className="group-parent20">
                <div className="input-parent22">
                  <div className="input58">2020-01-01</div>
                  <div className="label203">Created On</div>
                </div>
                <img className="group-child34" alt="" src="/group-70204.svg" />
              </div>
            </div>
            <div className="group-wrapper17">
              <div className="group-parent21">
                <div className="input-parent23">
                  <div className="input58">10</div>
                  <div className="label203">Survey Questions</div>
                </div>
                <img className="group-child34" alt="" src="/group-70205.svg" />
              </div>
            </div>
            <div className="group-wrapper17">
              <div className="group-parent22">
                <div className="input-parent24">
                  <div className="input58">68</div>
                  <div className="label203">Total Responses</div>
                </div>
                <img className="group-child34" alt="" src="/group-70241.svg" />
              </div>
            </div>
            <div className="group-wrapper17">
              <div className="group-parent20">
                <div className="input-parent22">
                  <div className="input58">2020-03-01</div>
                  <div className="label203">Expires On</div>
                </div>
                <img className="group-child34" alt="" src="/group-70206.svg" />
              </div>
            </div>
            <div className="group-wrapper21">
              <div className="group-parent24">
                <img className="group-child34" alt="" src="/group-70301.svg" />
                <div className="input-parent26">
                  <div className="input58">68</div>
                  <div className="label203">Total Respondents</div>
                </div>
              </div>
            </div>
            <div className="group-wrapper21">
              <div className="group-parent25">
                <div className="group-wrapper23">
                  <div className="input-parent27">
                    <div className="input65">IT, Networking, Data</div>
                    <div className="label203">Tags</div>
                  </div>
                </div>
                <img className="group-child34" alt="" src="/group-70121.svg" />
              </div>
            </div>
            <div className="live-group">
              <img className="task-icon2" alt="" src="/live.svg" />
              <div className="input-parent28">
                <b className="input56">Active</b>
                <div className="label200">Status</div>
              </div>
            </div>
          </div>
          <div className="event-heading-creator-child1" />
          <div className="accepting-responses-group">
            <b className="label202">Accepting Responses</b>
            <img
              className="switch-icon1"
              alt=""
              src="/switch1.svg"
              onClick={onSwitchIconClick}
            />
          </div>
        </div>
        <div className="enrollment-stats-group">
          <div className="enrollment-stats1">
            <div className="frame-parent104">
              <div className="ellipse-container">
                <img className="frame-child57" alt="" src="/ellipse-31.svg" />
                <img className="frame-child57" alt="" src="/ellipse-28.svg" />
                <img className="frame-child57" alt="" src="/ellipse-32.svg" />
                <img className="frame-child60" alt="" src="/ellipse-30.svg" />
                <div className="total-count-parent1">
                  <b className="total-count4">100</b>
                  <div className="optional-label5">Users</div>
                </div>
              </div>
              <div className="frame-parent105">
                <div className="png-1-group">
                  <div className="labelfilled11">
                    <b className="label211">20%</b>
                  </div>
                  <div className="lmnop-parent18">
                    <b className="lmnop82">20</b>
                    <div className="lmnop83">Completed</div>
                  </div>
                </div>
                <div className="png-1-group">
                  <div className="labelfilled12">
                    <b className="label211">50%</b>
                  </div>
                  <div className="lmnop-parent18">
                    <b className="lmnop82">50</b>
                    <div className="lmnop83">In Progress</div>
                  </div>
                </div>
                <div className="png-1-group">
                  <div className="labelfilled13">
                    <b className="label211">30%</b>
                  </div>
                  <div className="lmnop-parent18">
                    <b className="lmnop82">30</b>
                    <div className="lmnop83">Not Started</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent106">
              <div className="total-count-parent2">
                <b className="total-count4">140</b>
                <div className="optional-label5">Total Employees</div>
              </div>
              <div className="frame-parent107">
                <div className="frame-parent108">
                  <div className="rectangle-parent8">
                    <div className="frame-child61" />
                    <div className="frame-child62" />
                  </div>
                  <div className="vector-parent8">
                    <img
                      className="frame-child63"
                      alt=""
                      src="/rectangle-1066.svg"
                    />
                    <div className="h1-medium-24px-parent1">
                      <div className="lmnop82">Completed</div>
                      <b className="lmnop88">30 %</b>
                    </div>
                  </div>
                </div>
                <div className="frame-parent108">
                  <div className="rectangle-parent8">
                    <div className="frame-child64" />
                    <div className="frame-child65" />
                  </div>
                  <div className="vector-parent8">
                    <img
                      className="frame-child63"
                      alt=""
                      src="/rectangle-1069.svg"
                    />
                    <div className="h1-medium-24px-parent1">
                      <div className="lmnop82">In Progress</div>
                      <b className="lmnop88">40 %</b>
                    </div>
                  </div>
                </div>
                <div className="frame-parent110">
                  <div className="rectangle-parent8">
                    <div className="frame-child67" />
                    <div className="frame-child68" />
                  </div>
                  <div className="vector-parent10">
                    <img
                      className="frame-child63"
                      alt=""
                      src="/rectangle-10691.svg"
                    />
                    <div className="h1-medium-24px-parent3">
                      <div className="lmnop82">In Progress</div>
                      <b className="lmnop88">40 %</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent111">
              <div className="frame-parent112">
                <div className="input-parent29">
                  <b className="label199">Overall Completion Stats</b>
                  <div className="px-drag-container">
                    <img className="px-drag4" alt="" src="/24px--drag4.svg" />
                    <img
                      className="settings-outline-icon8"
                      alt=""
                      src="/settings-outline.svg"
                    />
                  </div>
                </div>
                <div className="frame-child70" />
              </div>
              <div className="frame-parent113">
                <div className="ellipse-container">
                  <img
                    className="frame-child71"
                    alt=""
                    src="/ellipse-281.svg"
                  />
                  <img className="frame-child57" alt="" src="/ellipse-31.svg" />
                  <img className="frame-child60" alt="" src="/ellipse-30.svg" />
                  <div className="total-count-parent3">
                    <b className="total-count4">13</b>
                    <div className="optional-label5">Responses</div>
                  </div>
                </div>
                <div className="frame-parent105">
                  <div className="png-1-group">
                    <div className="labelfilled12">
                      <b className="label211">70%</b>
                    </div>
                    <div className="lmnop91">Complete</div>
                  </div>
                  <div className="png-1-group">
                    <div className="labelfilled13">
                      <b className="label211">30%</b>
                    </div>
                    <div className="lmnop91">Incomplete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent115">
            <div className="frame-parent116">
              <div className="frame-parent117">
                <div className="input-parent30">
                  <b className="input68">Response Trends</b>
                  <div className="input-parent31">
                    <div className="input69">
                      <div className="bg20" />
                      <div className="input-wrapper8">
                        <div className="input70">Weekly</div>
                      </div>
                      <img
                        className="arrow-icon-filled20"
                        alt=""
                        src="/arrow-icon-filled.svg"
                      />
                    </div>
                    <div className="px-drag-container">
                      <img className="px-drag4" alt="" src="/24px--drag1.svg" />
                      <img
                        className="settings-outline-icon8"
                        alt=""
                        src="/settings-outline1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame-child74" />
              </div>
              <div className="rectangle-parent11">
                <div className="group-child41" />
                <div className="input-parent32">
                  <div className="input71">
                    Select the Duration you want to see by
                  </div>
                  <div className="bg-parent7">
                    <div className="bg21" />
                    <div className="input72">Week</div>
                    <img
                      className="arrow-icon-filled21"
                      alt=""
                      src="/arrow-icon-filled4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent118">
              <div className="labelfilled-parent12">
                <div className="labelfilled16">
                  <b className="label216">33</b>
                </div>
                <div className="lmnop93">Not Started</div>
              </div>
              <div className="labelfilled-parent12">
                <div className="labelfilled17">
                  <b className="label216">33</b>
                </div>
                <div className="lmnop93">In Progress</div>
              </div>
              <div className="labelfilled-parent12">
                <div className="labelfilled18">
                  <b className="label216">33</b>
                </div>
                <div className="lmnop93">Completed</div>
              </div>
            </div>
            <div className="frame-parent119">
              <div className="frame-parent120">
                <div className="frame-parent121">
                  <div className="lmnop-parent21">
                    <div className="label211">25</div>
                    <div className="label211">20</div>
                    <div className="label211">15</div>
                    <div className="label211">10</div>
                    <div className="label211">5</div>
                    <div className="label211">0</div>
                  </div>
                  <div className="frame-parent122">
                    <div className="dividers-parent1">
                      <img
                        className="dividers-icon29"
                        alt=""
                        src="/dividers.svg"
                      />
                      <img
                        className="dividers-icon29"
                        alt=""
                        src="/dividers1.svg"
                      />
                      <img
                        className="dividers-icon29"
                        alt=""
                        src="/dividers2.svg"
                      />
                      <img
                        className="dividers-icon29"
                        alt=""
                        src="/dividers3.svg"
                      />
                      <img
                        className="dividers-icon29"
                        alt=""
                        src="/dividers4.svg"
                      />
                      <img
                        className="dividers-icon29"
                        alt=""
                        src="/dividers.svg"
                      />
                    </div>
                    <div className="dividers-frame">
                      <img
                        className="dividers-icon35"
                        alt=""
                        src="/dividers5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="dividers-parent2">
                  <img
                    className="dividers-icon36"
                    alt=""
                    src="/dividers6.svg"
                  />
                  <img
                    className="dividers-icon37"
                    alt=""
                    src="/dividers7.svg"
                  />
                  <img
                    className="dividers-icon38"
                    alt=""
                    src="/dividers8.svg"
                  />
                  <img
                    className="dividers-icon39"
                    alt=""
                    src="/dividers9.svg"
                  />
                  <img
                    className="dividers-icon39"
                    alt=""
                    src="/dividers10.svg"
                  />
                  <img
                    className="dividers-icon38"
                    alt=""
                    src="/dividers11.svg"
                  />
                  <img
                    className="dividers-icon38"
                    alt=""
                    src="/dividers12.svg"
                  />
                  <img
                    className="dividers-icon39"
                    alt=""
                    src="/dividers13.svg"
                  />
                  <img
                    className="dividers-icon38"
                    alt=""
                    src="/dividers14.svg"
                  />
                  <img
                    className="dividers-icon39"
                    alt=""
                    src="/dividers15.svg"
                  />
                  <img
                    className="dividers-icon38"
                    alt=""
                    src="/dividers16.svg"
                  />
                  <img
                    className="dividers-icon39"
                    alt=""
                    src="/dividers17.svg"
                  />
                  <img
                    className="dividers-icon38"
                    alt=""
                    src="/dividers18.svg"
                  />
                </div>
              </div>
              <div className="frame-parent123">
                <div className="frame-parent124">
                  <div className="vector-parent11">
                    <img
                      className="frame-child75"
                      alt=""
                      src="/rectangle-30.svg"
                    />
                    <img
                      className="frame-child76"
                      alt=""
                      src="/rectangle-19.svg"
                    />
                    <img
                      className="frame-child77"
                      alt=""
                      src="/rectangle-29.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent23">
                    <div className="lmnop104">Sun</div>
                    <div className="lmnop105">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent124">
                  <div className="vector-parent11">
                    <img
                      className="frame-child78"
                      alt=""
                      src="/rectangle-307.svg"
                    />
                    <img
                      className="frame-child79"
                      alt=""
                      src="/rectangle-197.svg"
                    />
                    <img
                      className="frame-child80"
                      alt=""
                      src="/rectangle-297.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent25">
                    <div className="lmnop104">Mon</div>
                    <div className="lmnop109">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent124">
                  <div className="vector-parent11">
                    <img
                      className="frame-child81"
                      alt=""
                      src="/rectangle-308.svg"
                    />
                    <img
                      className="frame-child82"
                      alt=""
                      src="/rectangle-198.svg"
                    />
                    <img
                      className="frame-child83"
                      alt=""
                      src="/rectangle-298.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent27">
                    <div className="lmnop104">Tue</div>
                    <div className="lmnop113">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent127">
                  <div className="vector-parent11">
                    <img
                      className="frame-child84"
                      alt=""
                      src="/rectangle-303.svg"
                    />
                    <img
                      className="frame-child85"
                      alt=""
                      src="/rectangle-193.svg"
                    />
                    <img
                      className="frame-child86"
                      alt=""
                      src="/rectangle-293.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent25">
                    <div className="lmnop104">Wed</div>
                    <div className="lmnop109">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent124">
                  <div className="vector-parent11">
                    <img
                      className="frame-child87"
                      alt=""
                      src="/rectangle-309.svg"
                    />
                    <img
                      className="frame-child88"
                      alt=""
                      src="/rectangle-199.svg"
                    />
                    <img
                      className="frame-child89"
                      alt=""
                      src="/rectangle-299.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent23">
                    <div className="lmnop104">Thu</div>
                    <div className="lmnop105">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent124">
                  <div className="vector-parent11">
                    <img
                      className="frame-child84"
                      alt=""
                      src="/rectangle-305.svg"
                    />
                    <img
                      className="frame-child85"
                      alt=""
                      src="/rectangle-195.svg"
                    />
                    <img
                      className="frame-child92"
                      alt=""
                      src="/rectangle-295.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent33">
                    <div className="lmnop104">Fri</div>
                    <div className="lmnop125">(6 Courses)</div>
                  </div>
                </div>
                <div className="frame-parent127">
                  <div className="vector-parent11">
                    <img
                      className="frame-child87"
                      alt=""
                      src="/rectangle-306.svg"
                    />
                    <img
                      className="frame-child88"
                      alt=""
                      src="/rectangle-196.svg"
                    />
                    <img
                      className="frame-child89"
                      alt=""
                      src="/rectangle-296.svg"
                    />
                  </div>
                  <div className="lmnop-parent22">
                    <div className="lmnop102">Category 1</div>
                    <div className="lmnop103">(6 Courses)</div>
                  </div>
                  <div className="lmnop-parent35">
                    <div className="lmnop104">Sat</div>
                    <div className="lmnop129">(6 Courses)</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lmnop-parent36">
              <div className="lmnop130">250</div>
              <div className="lmnop131">200</div>
              <div className="lmnop131">150</div>
              <div className="lmnop131">100</div>
              <div className="lmnop134">50</div>
            </div>
            <img className="dividers-icon49" alt="" src="/dividers19.svg" />
          </div>
        </div>
        <div className="top-departments-frame">
          <div className="top-departments2">
            <div className="frame-parent131">
              <div className="frame-parent132">
                <div className="frame-parent133">
                  <div className="response-summary-container">
                    <b className="response-summary2">Response Summary</b>
                    <div className="label219">View All</div>
                    <img
                      className="input-inner"
                      alt=""
                      src="/24px--drag5.svg"
                    />
                    <div className="frame-parent134">
                      <div className="group-parent26">
                        <img
                          className="edit-outline-icon5"
                          alt=""
                          src="/group-76181.svg"
                        />
                        <img
                          className="edit-outline-icon5"
                          alt=""
                          src="/settings-outline2.svg"
                        />
                      </div>
                      <div className="frame-child97" />
                      <div className="label220">Compare</div>
                      <div className="button-outline4">
                        <div className="label199">Compare</div>
                      </div>
                      <div className="dropdown2">
                        <div className="input73">
                          <div className="bg20" />
                          <div className="input-wrapper8">
                            <div className="input70">Weekly</div>
                          </div>
                          <img
                            className="arrow-icon-filled20"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                      </div>
                      <div className="filters2">
                        <div className="input75">
                          <div className="label202">2021</div>
                          <img
                            className="arrow-icon-filled23"
                            alt=""
                            src="/arrow-icon-filled2.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input75">
                          <div className="label202">January</div>
                          <img
                            className="arrow-icon-filled23"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                          <img
                            className="input-inner"
                            alt=""
                            src="/artboard-11.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled1.svg"
                        />
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input75">
                          <div className="label202">Weekly</div>
                          <img
                            className="arrow-icon-filled23"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input81">
                          <div className="label222">
                            <div className="label223">Days</div>
                          </div>
                          <div className="input-parent33">
                            <div className="label202">Jan 1-Jan 7</div>
                            <img
                              className="arrow-icon-filled23"
                              alt=""
                              src="/arrow-icon-filled.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="input-inner"
                          alt=""
                          src="/artboard-11.svg"
                        />
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled1.svg"
                        />
                        <div className="chevron-left-container">
                          <img
                            className="chevron-left-icon2"
                            alt=""
                            src="/chevron-left.svg"
                          />
                          <div className="label202">
                            22 Jan 2021 - 28 Jan 2021
                          </div>
                          <img
                            className="chevron-left-icon2"
                            alt=""
                            src="/chevron-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="label224">View All</div>
                  </div>
                  <div className="frame-child70" />
                </div>
                <div className="tabs-container">
                  <div className="tab-data57">
                    <div className="label-wrapper55">
                      <div className="label225">Employees</div>
                    </div>
                    <div className="onstate-onoff5" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="organizational-goal-tile-item" />
                  </div>
                  <div className="tab-data59">
                    <div className="label-wrapper55">
                      <div className="label225">Instructors</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data59">
                    <div className="label-wrapper58">
                      <div className="label225">Certifications</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tabs-child3" />
                </div>
              </div>
              <div className="tabs-container">
                <div className="tabs8">
                  <div className="tab-data68">
                    <div className="label-wrapper55">
                      <div className="label225">Summaries</div>
                    </div>
                    <div className="onstate-onoff5" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="organizational-goal-tile-item" />
                  </div>
                  <div className="tab-data70">
                    <div className="label-wrapper55">
                      <div className="label225">Question</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Top Certifications</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data70">
                    <div className="label-wrapper55">
                      <div className="label225">Individual</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tabs-child4" />
                </div>
                <div className="tab-data79">
                  <div className="label-wrapper55">
                    <div className="response-summary2">View All</div>
                  </div>
                  <div className="organizational-goal-tile-item" />
                </div>
              </div>
            </div>
            {/* <div className="top1">
              <div className="displaying-5-of-25-questions-container">
                <div className="label225">Displaying 5 of 25 Questions</div>
              </div>
              <div className="input-parent34">
                <div className="input84">
                  <div className="bg20" />
                  <div className="input-wrapper8">
                    <div className="input70">Top</div>
                  </div>
                  <img
                    className="arrow-icon-filled20"
                    alt=""
                    src="/arrow-icon-filled.svg"
                  />
                </div>
                <div className="input69">
                  <div className="bg20" />
                  <div className="input-wrapper8">
                    <div className="input70">Top Performers</div>
                  </div>
                  <img
                    className="arrow-icon-filled20"
                    alt=""
                    src="/arrow-icon-filled.svg"
                  />
                </div>
                <div className="png-1-group">
                  <img
                    className="table-controls-top-right-child2"
                    alt=""
                    src="/group-26.svg"
                  />
                  <img
                    className="table-icons15"
                    alt=""
                    src="/table-icons.svg"
                  />
                  <img
                    className="table-controls-top-right-child2"
                    alt=""
                    src="/table-icons1.svg"
                  />
                  <div className="button4" />
                  <img
                    className="table-controls-top-right-child2"
                    alt=""
                    src="/table-icons2.svg"
                  />
                  <div className="view-icon2">
                    <div className="spacer12" />
                    <img className="icon-tab6" alt="" src="/icon-tab.svg" />
                    <img className="icon-tab6" alt="" src="/icon-tab1.svg" />
                    <div className="icon-tab8" />
                    <div className="spacer12" />
                  </div>
                  <div className="table-controls-top-right-child2">
                    <div className="bg25" />
                    <img className="check-icon2" alt="" src="/check.svg" />
                  </div>
                  <div className="table-controls-top-right-child2">
                    <div className="bg26" />
                    <img
                      className="check-icon2"
                      alt=""
                      src="/close-button.svg"
                    />
                  </div>
                  <div className="outline-dropdown-buttons-seg2" />
                  <div className="table-controls-top-right-child2">
                    <div className="bg25" />
                    <img
                      className="check-icon2"
                      alt=""
                      src="/filter-outline.svg"
                    />
                  </div>
                  <div className="table-controls-top-right-child2">
                    <div className="bg28" />
                    <img
                      className="check-icon2"
                      alt=""
                      src="/filter-outline1.svg"
                    />
                  </div>
                  <img
                    className="table-controls-top-right-child2"
                    alt=""
                    src="/group-25.svg"
                  />
                  <div className="spacer4" />
                </div>
                <div className="table-icons-container">
                  <img
                    className="table-controls-top-right-child2"
                    alt=""
                    src="/table-icons3.svg"
                  />
                  <img
                    className="table-controls-top-right-child2"
                    alt=""
                    src="/table-icons4.svg"
                  />
                  <img
                    className="table-icons15"
                    alt=""
                    src="/table-icons5.svg"
                  />
                </div>
              </div>
            </div> */}
            <div className="frame-child70" />
            {/* <div className="question-container">
              <div className="question2">Question</div>
              <div className="responses-container">
                <div className="question2">Responses</div>
                <div className="completion15">Completion %</div>
              </div>
            </div> */}
            <div className="frame-parent135">
              <div className="bottom-divider-onoff-parent1">
                <div className="frame-child70" />
                <div className="frame-parent136">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data14">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      {/* <div className="name-parent11">
                        <div className="label199">{`Q1. What would be the best-suited solution to the above situation? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div50">10</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child70" />
                <div className="frame-parent136">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data14">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="label199">{`Q2. How often and why do you feel the need to indulge in a sport in this pandemic? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div50">5</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child70" />
                <div className="frame-parent136">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data14">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="label199">
                          Q3. What would you prefer from the following?
                        </div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div50">7</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child70" />
                <div className="frame-parent136">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data14">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        {/* <div                         <div className="label199">
                          Q4. What membership benefits would you be looking for?
                        </div>className="label199">
                          Q4. What membership benefits would you be looking for?
                        </div> */}
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div50">2</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child70" />
                <div className="frame-parent136">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data14">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="label199">{`Q5. Lorem Ipsum is simply dummy text of the printing and typesetting industry? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div50">8</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child70" />
                <div className="frame-parent151">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data19">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-11@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="name66">{`Q6. Lorem Ipsum is simply dummy text ? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div65">4</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-child70" />
                <div className="frame-parent151">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data19">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="name66">{`Q7. Lorem Ipsum is simply dummy text of the printing? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div65">5</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent151">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data19">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="name66">{`Q8. Lorem Ipsum is simply dummy text of? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div65">3</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent151">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data19">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="name66">{`Q6. What would be the best-suited solution to the above situation? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div65">8</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent151">
                  <div className="frame-parent137">
                    <div className="rank-parent11">
                      <div className="label211">Rank</div>
                      <div className="div49">1</div>
                    </div>
                    <div className="table-data19">
                      <img
                        className="table-data-child12"
                        alt=""
                        src="/ellipse-1@2x.png"
                      />
                      <div className="name-parent11">
                        <div className="name66">{`Q6. What would be the best-suited solution to the above situation? `}</div>
                        <div className="completion15">
                          jack.matthew@rakuten.com
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent138">
                    <div className="time-utilized-parent8">
                      <div className="time-utilized13">Time Utilized</div>
                      <div className="div65">8</div>
                    </div>
                    <div className="completion-parent11">
                      <div className="completion16">Completion %</div>
                      <div className="div51">92%</div>
                      <div className="learning14">
                        <div className="label211">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-3-wrapper3">
                <img className="image-3-icon5" alt="" src="/image-3@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="top-departments-wrapper1">
          <div className="top-departments3">
            <div className="frame-parent166">
              <div className="frame-parent167">
                <div className="frame-parent133">
                  <div className="response-summary-container">
                    <b className="response-summary2">User’s Performance</b>
                    <div className="label219">View All</div>
                    <img className="px-drag4" alt="" src="/24px--drag6.svg" />
                    <div className="frame-parent134">
                      <div className="group-parent26">
                        <img
                          className="edit-outline-icon5"
                          alt=""
                          src="/group-76181.svg"
                        />
                        <img
                          className="edit-outline-icon5"
                          alt=""
                          src="/settings-outline2.svg"
                        />
                      </div>
                      <div className="frame-child97" />
                      <div className="label220">Compare</div>
                      <div className="button-outline4">
                        <div className="label199">Compare</div>
                      </div>
                      <div className="dropdown2">
                        <div className="input73">
                          <div className="bg20" />
                          <div className="input-wrapper8">
                            <div className="input70">Weekly</div>
                          </div>
                          <img
                            className="arrow-icon-filled20"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                      </div>
                      <div className="filters2">
                        <div className="input75">
                          <div className="label202">2021</div>
                          <img
                            className="arrow-icon-filled23"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input75">
                          <div className="label202">January</div>
                          <img
                            className="arrow-icon-filled23"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                          <img
                            className="input-inner"
                            alt=""
                            src="/artboard-11.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled1.svg"
                        />
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input75">
                          <div className="label202">Weekly</div>
                          <img
                            className="arrow-icon-filled23"
                            alt=""
                            src="/arrow-icon-filled.svg"
                          />
                        </div>
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/chevron-expand.svg"
                        />
                        <div className="input81">
                          <div className="label222">
                            <div className="label223">Days</div>
                          </div>
                          <div className="input-parent33">
                            <div className="label202">Jan 1-Jan 7</div>
                            <img
                              className="arrow-icon-filled23"
                              alt=""
                              src="/arrow-icon-filled.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="input-inner"
                          alt=""
                          src="/artboard-11.svg"
                        />
                        <img
                          className="chevron-expand-icon6"
                          alt=""
                          src="/0-icons--01-approved--close-circle-filled1.svg"
                        />
                        <div className="chevron-left-container">
                          <img
                            className="chevron-left-icon2"
                            alt=""
                            src="/chevron-left.svg"
                          />
                          <div className="label202">
                            22 Jan 2021 - 28 Jan 2021
                          </div>
                          <img
                            className="chevron-left-icon2"
                            alt=""
                            src="/chevron-right.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-child70" />
                </div>
                <div className="tabs-container">
                  <div className="tab-data57">
                    <div className="label-wrapper55">
                      <div className="label225">Employees</div>
                    </div>
                    <div className="onstate-onoff5" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="organizational-goal-tile-item" />
                  </div>
                  <div className="tab-data59">
                    <div className="label-wrapper55">
                      <div className="label225">Instructors</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data59">
                    <div className="label-wrapper58">
                      <div className="label225">Certifications</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tabs-child3" />
                </div>
              </div>
              <div className="tabs-parent1">
                <div className="tabs8">
                  <div className="tab-data91">
                    <div className="label-wrapper89">
                      <div className="label225">Question Summary</div>
                    </div>
                    <div className="onstate-onoff8" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="organizational-goal-tile-item" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Question</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data94">
                    <div className="label-wrapper89">
                      <div className="label225">Individual Responses</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tab-data58">
                    <div className="label-wrapper55">
                      <div className="label225">Item</div>
                    </div>
                    <div className="tab-data-child51" />
                  </div>
                  <div className="tabs-child6" />
                </div>
                <div className="input-parent36">
                  <div className="input84">
                    <div className="bg20" />
                    <div className="input-wrapper8">
                      <div className="input70">Top</div>
                    </div>
                    <img
                      className="arrow-icon-filled20"
                      alt=""
                      src="/arrow-icon-filled.svg"
                    />
                  </div>
                  <div className="input69">
                    <div className="bg20" />
                    <div className="input-wrapper8">
                      <div className="input70">Top Performers</div>
                    </div>
                    <img
                      className="arrow-icon-filled20"
                      alt=""
                      src="/arrow-icon-filled.svg"
                    />
                  </div>
                  <div className="frame-parent134">
                    <img
                      className="table-controls-top-right-child2"
                      alt=""
                      src="/group-26.svg"
                    />
                    <img
                      className="table-icons15"
                      alt=""
                      src="/table-icons.svg"
                    />
                    <img
                      className="table-controls-top-right-child2"
                      alt=""
                      src="/table-icons1.svg"
                    />
                    <div className="button4" />
                    <img
                      className="table-controls-top-right-child2"
                      alt=""
                      src="/table-icons2.svg"
                    />
                    <div className="view-icon2">
                      <div className="spacer12" />
                      <img className="icon-tab6" alt="" src="/icon-tab.svg" />
                      <img className="icon-tab6" alt="" src="/icon-tab1.svg" />
                      <div className="icon-tab8" />
                      <div className="spacer12" />
                    </div>
                    <div className="table-controls-top-right-child2">
                      <div className="bg25" />
                      <img className="check-icon2" alt="" src="/check.svg" />
                    </div>
                    <div className="table-controls-top-right-child2">
                      <div className="bg26" />
                      <img
                        className="check-icon2"
                        alt=""
                        src="/close-button1.svg"
                      />
                    </div>
                    <div className="outline-dropdown-buttons-seg2" />
                    <div className="table-controls-top-right-child2">
                      <div className="bg25" />
                      <img
                        className="check-icon2"
                        alt=""
                        src="/filter-outline.svg"
                      />
                    </div>
                    <div className="table-controls-top-right-child2">
                      <div className="bg28" />
                      <img
                        className="check-icon2"
                        alt=""
                        src="/filter-outline1.svg"
                      />
                    </div>
                    <img
                      className="table-controls-top-right-child2"
                      alt=""
                      src="/group-251.svg"
                    />
                    <div className="spacer4" />
                  </div>
                  <div className="table-icons-container">
                    <img
                      className="table-controls-top-right-child2"
                      alt=""
                      src="/table-icons3.svg"
                    />
                    <img
                      className="table-controls-top-right-child2"
                      alt=""
                      src="/table-icons4.svg"
                    />
                    <img
                      className="table-icons15"
                      alt=""
                      src="/table-icons5.svg"
                    />
                  </div>
                </div>
                <div className="tab-data102">
                  <div className="label-wrapper55">
                    <div className="response-summary2">View All</div>
                  </div>
                  <div className="organizational-goal-tile-item" />
                </div>
              </div>
            </div>
            <div className="question-parent1">
              <div className="question2">Question</div>
              <div className="responses-container">
                <div className="question2">Responses</div>
                <div className="completion15">Completion %</div>
              </div>
            </div>
            <div className="frame-parent170">
              <div className="frame-parent171">
                <div className="frame-parent172">
                  <div className="frame-parent173">
                    <div className="frame-parent174">
                      <div className="png-1-group">
                        <img className="lock-fill-11" alt="" src="/png-1.svg" />
                        <div className="label225">CSV</div>
                      </div>
                      <img
                        className="edit-outline-icon4"
                        alt=""
                        src="/download-outline.svg"
                      />
                    </div>
                    <div className="frame-parent174">
                      <div className="png-1-group">
                        <img className="px-check1" alt="" src="/excel1.svg" />
                        <div className="label225">XLS</div>
                      </div>
                      <img
                        className="edit-outline-icon4"
                        alt=""
                        src="/download-outline.svg"
                      />
                    </div>
                    <div className="displaying-3-of1">
                      Displaying 3 of 3 Departments
                    </div>
                    <div className="input103">
                      <div className="bg20" />
                      <div className="input-wrapper8">
                        <div className="input70">Pending Approvals</div>
                      </div>
                      <img
                        className="arrow-icon-filled20"
                        alt=""
                        src="/arrow-icon-filled.svg"
                      />
                    </div>
                  </div>
                  <div className="label-parent3">
                    <div className="label288">Add New</div>
                    <div className="displaying-8-of1">
                      Displaying 8 of 16 Individuals
                    </div>
                    <img
                      className="settings-outline-icon8"
                      alt=""
                      src="/close-button1.svg"
                    />
                    <div className="input105">
                      <div className="bg20" />
                      <div className="input-wrapper8">
                        <div className="input70">Approved Goals</div>
                      </div>
                      <img
                        className="arrow-icon-filled20"
                        alt=""
                        src="/arrow-icon-filled.svg"
                      />
                    </div>
                    <img
                      className="table-icons15"
                      alt=""
                      src="/table-icons5.svg"
                    />
                  </div>
                  <div className="frame-wrapper4">
                    <div className="property-1rafiq-group">
                      <div className="property-1rafiq2">
                        <div className="model-header4">
                          <div className="individuals-34-group">
                            <b className="label225">
                              <span>{`Individuals `}</span>
                              <span className="span3">(34)</span>
                            </b>
                            <div className="label289">Add New</div>
                            <img
                              className="settings-outline-icon8"
                              alt=""
                              src="/close-button2.svg"
                            />
                          </div>
                          <div className="model-header-child2" />
                        </div>
                        <div className="tabs11" />
                        <div className="frame-parent176">
                          <div className="group-tile-container">
                            <div className="group-tile20">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q1.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            {/* <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q2.</div>
                              <div className="label199">
                                How often and why do you feel ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q3.</div>
                              <div className="label199">
                                Please submit the supporting file...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q4.</div>
                              <div className="label199">
                                How would you rate your experi ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q5.</div>
                              <div className="label199">
                                Select a date you would want the ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q6.</div>
                              <div className="label199">
                                How would you rate your experi ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q7.</div>
                              <div className="label199">
                                How would you rate your experi ...
                              </div>
                            </div> */}
                            {/* <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q8.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q9.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q10.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q10.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q10.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q10.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div>
                            <div className="group-tile21">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label199">Q10.</div>
                              <div className="label199">
                                What would be the best-suited ...
                              </div>
                            </div> */}
                          </div>
                          <div className="image-3-wrapper4">
                            <img
                              className="image-3-icon6"
                              alt=""
                              src="/image-31@2x.png"
                            />
                          </div>
                        </div>
                        <div className="tabs11" />
                      </div>
                      <div className="property-1rafiq3">
                        <div className="model-header4">
                          <div className="individuals-34-group">
                            <b className="label225">
                              <span>{`Departments `}</span>
                              <span className="span3">(3)</span>
                            </b>
                            <div className="label289">Add New</div>
                            <img
                              className="settings-outline-icon8"
                              alt=""
                              src="/close-button2.svg"
                            />
                          </div>
                          <div className="model-header-child2" />
                        </div>
                        <div className="tabs11" />
                        <div className="frame-parent177">
                          <div className="group-tile-container">
                            <div className="group-tile34">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label202">Department 1</div>
                              <div className="status-tile3">
                                <img
                                  className="finished-icon2"
                                  alt=""
                                  src="/finished1.svg"
                                />
                                <div className="label211">Approved</div>
                              </div>
                            </div>
                            <div className="group-tile34">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label202">Department 2</div>
                              <div className="status-tile3">
                                <img
                                  className="finished-icon2"
                                  alt=""
                                  src="/finished1.svg"
                                />
                                <div className="label211">Approved</div>
                              </div>
                            </div>
                            <div className="group-tile36">
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/selections-30.svg"
                              />
                              <div className="label202">Org 3</div>
                              <div className="status-tile5">
                                <img
                                  className="arrow-icon-filled23"
                                  alt=""
                                  src="/upcoming1.svg"
                                />
                                <div className="label211">Pending</div>
                              </div>
                            </div>
                            <div className="group-tile37">
                              <div className="selections-30-parent2">
                                <img
                                  className="settings-outline-icon8"
                                  alt=""
                                  src="/selections-301.svg"
                                />
                                <div className="label202">Goal Title 4</div>
                              </div>
                              <div className="frame-parent178">
                                <div className="parent2">
                                  <div className="name66">24</div>
                                  <div className="users3">Users</div>
                                </div>
                                <img
                                  className="edit-outline-icon5"
                                  alt=""
                                  src="/6-dot1.svg"
                                />
                              </div>
                            </div>
                            <div className="group-tile37">
                              <div className="selections-30-parent2">
                                <img
                                  className="settings-outline-icon8"
                                  alt=""
                                  src="/selections-301.svg"
                                />
                                <div className="label202">Goal Title 5</div>
                              </div>
                              <div className="frame-parent178">
                                <div className="parent2">
                                  <div className="name66">24</div>
                                  <div className="users3">Users</div>
                                </div>
                                <img
                                  className="edit-outline-icon5"
                                  alt=""
                                  src="/6-dot1.svg"
                                />
                              </div>
                            </div>
                            <div className="group-tile39">
                              <div className="selections-30-parent2">
                                <img
                                  className="settings-outline-icon8"
                                  alt=""
                                  src="/selections-30.svg"
                                />
                                <div className="label202">Goal Title 6</div>
                              </div>
                              <div className="frame-parent178">
                                <div className="parent2">
                                  <div className="name66">24</div>
                                  <div className="users3">Users</div>
                                </div>
                                <img
                                  className="edit-outline-icon5"
                                  alt=""
                                  src="/6-dot1.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="image-3-wrapper4">
                            <img
                              className="image-3-icon7"
                              alt=""
                              src="/image-31@2x.png"
                            />
                          </div>
                        </div>
                        <div className="tabs11" />
                      </div>
                      <div className="frame-child100" />
                      <div className="model-header-group">
                        <div className="model-header6">
                          <div className="response-summary-parent1">
                            <b className="label225">Response Summary</b>
                            <div className="label289">Add New</div>
                            <img
                              className="settings-outline-icon8"
                              alt=""
                              src="/close-button1.svg"
                            />
                            <div className="chevron-right-container">
                              <img
                                className="edit-outline-icon4"
                                alt=""
                                src="/chevron-right1.svg"
                              />
                              <img
                                className="edit-outline-icon4"
                                alt=""
                                src="/chevron-right2.svg"
                              />
                            </div>
                            <div className="button-outline-container">
                              <img
                                className="chevron-right-icon10"
                                alt=""
                                src="/chevron-right3.svg"
                              />
                              <img
                                className="edit-outline-icon4"
                                alt=""
                                src="/chevron-right4.svg"
                              />
                            </div>
                          </div>
                          <div className="model-header-child2" />
                        </div>
                        <div className="model-department-manager1">
                          <div className="organizational-goal-tile1">
                            <div className="frame-parent181">
                              <div className="frame-parent182">
                                <div className="png-1-group">
                                  <img
                                    className="selections-30-icon41"
                                    alt=""
                                    src="/selections-302.svg"
                                  />
                                  <div className="goal-title-1-group">
                                    <div className="goal-title-11">
                                      Goal Title 1
                                    </div>
                                    <div className="frame-parent183">
                                      <div className="button-outline-container">
                                        <img
                                          className="frame-child101"
                                          alt=""
                                          src="/group-70203.svg"
                                        />
                                        <div className="label-parent4">
                                          <div className="label211">
                                            Target Date
                                          </div>
                                          <div className="input-parent37">
                                            <b className="input107">
                                              2022-12-12
                                            </b>
                                            <div className="tags14">
                                              <div className="label211">
                                                2022-01-01
                                              </div>
                                            </div>
                                            <div className="input108">
                                              -01-01
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="abcdef15">
                                        Overdue: 1 Year ago
                                      </div>
                                    </div>
                                    <div className="table-data-group">
                                      <div className="table-data24">
                                        <img
                                          className="table-data-child22"
                                          alt=""
                                          src="/ellipse-597@2x.png"
                                        />
                                        <div className="label199">
                                          Jakob Mango
                                        </div>
                                      </div>
                                      <div className="frame-child102" />
                                      <div className="time-outline-group">
                                        <img
                                          className="edit-outline-icon5"
                                          alt=""
                                          src="/time-outline.svg"
                                        />
                                        <div className="input107">
                                          2021-09-01 • 10:56
                                        </div>
                                      </div>
                                      <div className="frame-child102" />
                                      <div className="learning24">
                                        <div className="label211">
                                          Mandatory
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent184">
                                  <div className="view-details-group">
                                    <img
                                      className="settings-outline-icon8"
                                      alt=""
                                      src="/view-details.svg"
                                    />
                                    <img
                                      className="settings-outline-icon8"
                                      alt=""
                                      src="/edit-outline2.svg"
                                    />
                                    <img
                                      className="input-inner"
                                      alt=""
                                      src="/iconsoutlinearchive1.svg"
                                    />
                                    <img
                                      className="edit-outline-icon5"
                                      alt=""
                                      src="/close-button3.svg"
                                    />
                                  </div>
                                  <div className="indicator-icons-goals-container">
                                    <div className="indicator-icons-goals1">
                                      <img
                                        className="chevron-expand-icon6"
                                        alt=""
                                        src="/star.svg"
                                      />
                                      <div className="question2">
                                        Organizational Goal
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="h1-medium-24px-frame">
                                <div className="h1-medium9">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled it to make
                                  a type specimen book.
                                </div>
                              </div>
                            </div>
                            <div className="organizational-goal-tile-item" />
                            <div className="organizational-goal-tile-inner1">
                              <div className="button-outline-container">
                                <div className="button-outline6">
                                  <div className="label199">Update Status</div>
                                </div>
                                <div className="button6">
                                  <div className="label199">Publish</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tabs-container">
                            <div className="tab-data57">
                              <div className="label-wrapper55">
                                <div className="label225">Approved</div>
                              </div>
                              <div className="onstate-onoff5" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="organizational-goal-tile-item" />
                            </div>
                            <div className="tab-data59">
                              <div className="label-wrapper55">
                                <div className="label225">Pending</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data59">
                              <div className="label-wrapper55">
                                <div className="label225">Rejected</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tab-data58">
                              <div className="label-wrapper55">
                                <div className="label225">Item</div>
                              </div>
                              <div className="tab-data-child51" />
                            </div>
                            <div className="tabs-child3" />
                          </div>
                          <div className="model-header7">
                            <div className="department-goals-3-group">
                              <b className="label225">
                                <span>{`Department Goals `}</span>
                                <span className="span3">(3)</span>
                              </b>
                              <div className="label289">Add New</div>
                              <img
                                className="settings-outline-icon8"
                                alt=""
                                src="/close-button2.svg"
                              />
                              <img
                                className="edit-outline-icon5"
                                alt=""
                                src="/edit-outline3.svg"
                              />
                            </div>
                            <div className="tab-data-child51" />
                          </div>
                          <div className="bottom-divider-onoff-parent2">
                            <div className="frame-child70" />
                            <div className="frame-parent185">
                              <div className="frame-parent186">
                                <div className="frame-parent137">
                                  <div className="rank-parent11">
                                    <div className="label211">Rank</div>
                                    <div className="div49">1</div>
                                  </div>
                                  <div className="table-data14">
                                    <img
                                      className="table-data-child12"
                                      alt=""
                                      src="/ellipse-1@2x.png"
                                    />
                                    <div className="name-parent11">
                                      <div className="label199">
                                        <span className="started-on1">
                                          Started On
                                        </span>
                                        <b> :</b>
                                        <span>
                                          {" "}
                                          Monday, February 21, 2022 3:43:52 PM
                                        </span>
                                      </div>
                                      <div className="completion15">
                                        jack.matthew@rakuten.com
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent138">
                                  <div className="time-utilized-wrapper2">
                                    <div className="time-utilized13">
                                      Time Utilized
                                    </div>
                                  </div>
                                  <div className="completion-parent11">
                                    <div className="completion16">
                                      Completion %
                                    </div>
                                    <div className="div51">92%</div>
                                    <div className="learning14">
                                      <div className="label211">98%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="group-parent29">
                                <div className="group-parent30">
                                  <div className="group-wrapper24">
                                    <div className="bg-parent8">
                                      <img
                                        className="bg-icon6"
                                        alt=""
                                        src="/bg5.svg"
                                      />
                                      <div className="settings-outline-parent2">
                                        <img
                                          className="edit-outline-icon5"
                                          alt=""
                                          src="/settings-outline3.svg"
                                        />
                                        <img
                                          className="expand-icon4"
                                          alt=""
                                          src="/expand.svg"
                                        />
                                      </div>
                                      <div className="group-child42" />
                                      <div className="abcdef-parent2">
                                        <b className="label202">
                                          User Expiration
                                        </b>
                                        <img
                                          className="input-inner"
                                          alt=""
                                          src="/info-outline.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-child43" />
                                  <div className="group-child44" />
                                  <b className="total-count7">822</b>
                                  <div className="optional-label8">
                                    Total User
                                  </div>
                                  <div className="group-wrapper25">
                                    <div className="bg-parent9">
                                      <div className="bg38" />
                                      <div className="input109">In 7 Days</div>
                                      <img
                                        className="arrow-icon-filled38"
                                        alt=""
                                        src="/arrow-icon-filled2.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent189">
                                  <div className="frame-parent190">
                                    <div className="start-spacer-parent8">
                                      <div className="start-spacer10">
                                        <div className="start-spacer-child8" />
                                        <div className="column-start-mark-hide-norma10" />
                                      </div>
                                      <img
                                        className="frame-child104"
                                        alt=""
                                        src="/group-13498.svg"
                                      />
                                      <div className="end-spacer10">
                                        <div className="end-spacer-child8" />
                                        <div className="column-end-mark-hide-normall10" />
                                      </div>
                                      <div className="labelfilled-parent12">
                                        <div className="lmnop82">
                                          Inventory Mgt
                                        </div>
                                        <div className="icons10" />
                                      </div>
                                    </div>
                                    <div className="start-spacer-parent8">
                                      <div className="start-spacer10">
                                        <div className="start-spacer-child8" />
                                        <div className="column-start-mark-hide-norma10" />
                                      </div>
                                      <img
                                        className="frame-child104"
                                        alt=""
                                        src="/group-134992.svg"
                                      />
                                      <div className="end-spacer10">
                                        <div className="end-spacer-child8" />
                                        <div className="column-end-mark-hide-normall10" />
                                      </div>
                                      <div className="labelfilled-parent12">
                                        <div className="lmnop82">Faults</div>
                                        <div className="icons10" />
                                      </div>
                                    </div>
                                    <div className="start-spacer-parent8">
                                      <div className="start-spacer10">
                                        <div className="start-spacer-child8" />
                                        <div className="column-start-mark-hide-norma10" />
                                      </div>
                                      <img
                                        className="frame-child104"
                                        alt=""
                                        src="/group-13500.svg"
                                      />
                                      <div className="end-spacer10">
                                        <div className="end-spacer-child8" />
                                        <div className="column-end-mark-hide-normall10" />
                                      </div>
                                      <div className="labelfilled-parent12">
                                        <div className="lmnop82">
                                          Configuration
                                        </div>
                                        <div className="icons10" />
                                      </div>
                                    </div>
                                    <div className="start-spacer-parent8">
                                      <div className="start-spacer10">
                                        <div className="start-spacer-child8" />
                                        <div className="column-start-mark-hide-norma10" />
                                      </div>
                                      <img
                                        className="frame-child104"
                                        alt=""
                                        src="/group-134981.svg"
                                      />
                                      <div className="end-spacer10">
                                        <div className="end-spacer-child8" />
                                        <div className="column-end-mark-hide-normall10" />
                                      </div>
                                      <div className="labelfilled-parent12">
                                        <div className="lmnop82">
                                          Performance
                                        </div>
                                        <div className="icons10" />
                                      </div>
                                    </div>
                                  </div>
                                  <b className="lmnop135">200</b>
                                  <b className="lmnop136">198</b>
                                  <b className="lmnop137">134</b>
                                  <b className="lmnop138">130</b>
                                  <b className="lmnop139">130</b>
                                  <div className="group-child45" />
                                  <div className="group-child46" />
                                  <div className="group-child47" />
                                  <div className="group-child48" />
                                  <div className="group-child49" />
                                  <img
                                    className="dividers-icon50"
                                    alt=""
                                    src="/dividers20.svg"
                                  />
                                  <div className="group-child50" />
                                  <div className="group-child51" />
                                  <div className="group-child52" />
                                </div>
                                <div className="start-spacer-parent12">
                                  <div className="start-spacer10">
                                    <div className="start-spacer-child8" />
                                    <div className="column-start-mark-hide-norma10" />
                                  </div>
                                  <img
                                    className="frame-child104"
                                    alt=""
                                    src="/group-134982.svg"
                                  />
                                  <div className="end-spacer10">
                                    <div className="end-spacer-child8" />
                                    <div className="column-end-mark-hide-normall10" />
                                  </div>
                                  <div className="labelfilled-parent12">
                                    <div className="lmnop82">Tribe</div>
                                    <div className="icons10" />
                                  </div>
                                </div>
                                <div className="rectangle-parent12">
                                  <div className="group-child53" />
                                  <div className="group-child54" />
                                  <div className="lmnop140">Active User</div>
                                  <div className="lmnop141">
                                    In Active for more than 30 day
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-divider-onoff29" />
                            <div className="bottom-divider-onoff29" />
                            <div className="frame-parent185">
                              <div className="frame-parent186">
                                <div className="frame-parent137">
                                  <div className="rank-parent11">
                                    <div className="label211">Rank</div>
                                    <div className="div49">1</div>
                                  </div>
                                  <div className="table-data14">
                                    <img
                                      className="table-data-child12"
                                      alt=""
                                      src="/ellipse-1@2x.png"
                                    />
                                    <div className="name-parent11">
                                      <div className="label199">
                                        <b>{`Time Spent :                      `}</b>
                                        <span>{`00:00:11 `}</span>
                                      </div>
                                      <div className="completion15">
                                        jack.matthew@rakuten.com
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="frame-parent138">
                                  <div className="time-utilized-wrapper2">
                                    <div className="time-utilized13">
                                      Time Utilized
                                    </div>
                                  </div>
                                  <div className="completion-parent11">
                                    <div className="completion16">
                                      Completion %
                                    </div>
                                    <div className="div51">92%</div>
                                    <div className="learning14">
                                      <div className="label211">98%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-parent10">
                                <img
                                  className="bg-icon7"
                                  alt=""
                                  src="/bg6.svg"
                                />
                                <div className="group-wrapper26">
                                  <div className="group2">
                                    <img
                                      className="variable-segments-circle1"
                                      alt=""
                                      src="/variable-segments-circle1.svg"
                                    />
                                    <b className="lmnop142">2000</b>
                                    <div className="optional-label9">Total</div>
                                  </div>
                                </div>
                                <div className="group-parent31">
                                  <div className="labelfilled-parent15">
                                    <div className="labelfilled19">
                                      <b className="label211">400</b>
                                    </div>
                                    <div className="lmnop143">Local Users</div>
                                  </div>
                                  <div className="labelfilled20">
                                    <b className="label211">{`900 `}</b>
                                  </div>
                                  <div className="lmnop144">Rakuten Id</div>
                                  <div className="labelfilled21">
                                    <b className="label211">60%</b>
                                  </div>
                                  <div className="lmnop145">Intra</div>
                                </div>
                                <div className="settings-outline-parent3">
                                  <img
                                    className="edit-outline-icon5"
                                    alt=""
                                    src="/settings-outline4.svg"
                                  />
                                  <img
                                    className="edit-outline-icon5"
                                    alt=""
                                    src="/expand1.svg"
                                  />
                                </div>
                                <div className="group-child55" />
                                <div className="abcdef-parent3">
                                  <b className="label202">
                                    Unknown Login Attempt
                                  </b>
                                  <img
                                    className="input-inner"
                                    alt=""
                                    src="/info-outline1.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="bottom-divider-onoff29" />
                            <div className="bottom-divider-onoff29" />
                            <div className="frame-wrapper5">
                              <div className="frame-wrapper6">
                                <div className="frame-parent195">
                                  <div className="frame-parent196">
                                    <div className="frame-parent137">
                                      <div className="rank-parent11">
                                        <div className="label211">Rank</div>
                                        <div className="div49">1</div>
                                      </div>
                                      <div className="table-data27">
                                        <img
                                          className="table-data-child12"
                                          alt=""
                                          src="/ellipse-1@2x.png"
                                        />
                                        <div className="name-parent11">
                                          <div className="name66">{`Q1. What would be the best-suited solution to the above situation? `}</div>
                                          <div className="name111">
                                            jack.matthew@rakuten.com
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="frame-parent138">
                                      <div className="time-utilized-wrapper2">
                                        <div className="time-utilized13">
                                          Time Utilized
                                        </div>
                                      </div>
                                      <div className="completion-parent11">
                                        <div className="completion16">
                                          Completion %
                                        </div>
                                        <div className="div51">92%</div>
                                        <div className="learning14">
                                          <div className="label211">98%</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-wrapper27">
                                    <div className="group-wrapper28">
                                      <div className="group-wrapper28">
                                        <img
                                          className="bg-icon8"
                                          alt=""
                                          src="/bg7.svg"
                                        />
                                        <div className="group-parent32">
                                          <div className="lmnop-parent37">
                                            <div className="lmnop146">200</div>
                                            <div className="lmnop147">150</div>
                                            <div className="lmnop148">100</div>
                                            <div className="lmnop149">50</div>
                                            <div className="lmnop150">10</div>
                                          </div>
                                          <div className="dividers-parent3">
                                            <img
                                              className="dividers-icon51"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon51"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon51"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon51"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                            <img
                                              className="dividers-icon51"
                                              alt=""
                                              src="/dividers21.svg"
                                            />
                                          </div>
                                          <div className="lmnop151">08/08</div>
                                          <div className="lmnop152">08/08</div>
                                          <div className="lmnop153">08/08</div>
                                          <div className="lmnop154">08/08</div>
                                          <div className="lmnop155">08/08</div>
                                          <div className="lmnop156">08/08</div>
                                          <div className="lmnop157">08/08</div>
                                        </div>
                                        <img
                                          className="group-child56"
                                          alt=""
                                          src="/vector-91.svg"
                                        />
                                        <img
                                          className="group-child57"
                                          alt=""
                                          src="/vector-101.svg"
                                        />
                                        <img
                                          className="group-child58"
                                          alt=""
                                          src="/vector-111.svg"
                                        />
                                        <img
                                          className="group-child59"
                                          alt=""
                                          src="/vector-121.svg"
                                        />
                                        <img
                                          className="group-child60"
                                          alt=""
                                          src="/vector-131.svg"
                                        />
                                        <div className="settings-outline-parent4">
                                          <img
                                            className="edit-outline-icon5"
                                            alt=""
                                            src="/settings-outline5.svg"
                                          />
                                          <img
                                            className="edit-outline-icon5"
                                            alt=""
                                            src="/expand4.svg"
                                          />
                                        </div>
                                        <div className="group-child61" />
                                        <div className="abcdef-parent4">
                                          <b className="label202">
                                            Dormant Accounts
                                          </b>
                                          <img
                                            className="input-inner"
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
                            <div className="bottom-divider-onoff29" />
                          </div>
                          <div className="frame-parent199">
                            <div className="bottom-divider-onoff-parent3">
                              <div className="bottom-divider-onoff29" />
                              <div className="group-parent33">
                                <div className="group-parent34">
                                  <div className="group-parent34">
                                    <div className="group-parent34">
                                      <img
                                        className="bg-icon9"
                                        alt=""
                                        src="/bg8.svg"
                                      />
                                      <div className="settings-outline-parent5">
                                        <img
                                          className="settings-outline-icon8"
                                          alt=""
                                          src="/settings-outline6.svg"
                                        />
                                        <img
                                          className="expand-icon4"
                                          alt=""
                                          src="/expand3.svg"
                                        />
                                      </div>
                                      <div className="group-child62" />
                                      <div className="abcdef-parent5">
                                        <b className="label202">
                                          933 Responses
                                        </b>
                                        <img
                                          className="input-inner"
                                          alt=""
                                          src="/info-outline3.svg"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="group-wrapper30">
                                    <div className="bg-parent13">
                                      <div className="bg39" />
                                      <div className="input110">In 7 Days</div>
                                      <img
                                        className="arrow-icon-filled39"
                                        alt=""
                                        src="/arrow-icon-filled3.svg"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="group-parent35">
                                  <div className="frame-parent200">
                                    <div className="frame-parent190">
                                      <div className="start-spacer-parent8">
                                        <div className="start-spacer10">
                                          <div className="start-spacer-child8" />
                                          <div className="column-start-mark-hide-norma10" />
                                        </div>
                                        <img
                                          className="frame-child109"
                                          alt=""
                                          src="/group-134983.svg"
                                        />
                                        <div className="end-spacer10">
                                          <div className="end-spacer-child8" />
                                          <div className="column-end-mark-hide-normall10" />
                                        </div>
                                        <div className="labelfilled-parent12">
                                          <div className="lmnop82">
                                            Inventory Mgt
                                          </div>
                                          <div className="icons10" />
                                        </div>
                                      </div>
                                      <div className="start-spacer-parent8">
                                        <div className="start-spacer10">
                                          <div className="start-spacer-child8" />
                                          <div className="column-start-mark-hide-norma10" />
                                        </div>
                                        <img
                                          className="frame-child109"
                                          alt=""
                                          src="/group-134993.svg"
                                        />
                                        <div className="end-spacer10">
                                          <div className="end-spacer-child8" />
                                          <div className="column-end-mark-hide-normall10" />
                                        </div>
                                        <div className="labelfilled-parent12">
                                          <div className="lmnop82">Faults</div>
                                          <div className="icons10" />
                                        </div>
                                      </div>
                                      <div className="start-spacer-parent8">
                                        <div className="start-spacer10">
                                          <div className="start-spacer-child8" />
                                          <div className="column-start-mark-hide-norma10" />
                                        </div>
                                        <img
                                          className="frame-child109"
                                          alt=""
                                          src="/group-135001.svg"
                                        />
                                        <div className="end-spacer10">
                                          <div className="end-spacer-child8" />
                                          <div className="column-end-mark-hide-normall10" />
                                        </div>
                                        <div className="labelfilled-parent12">
                                          <div className="lmnop82">
                                            Configuration
                                          </div>
                                          <div className="icons10" />
                                        </div>
                                      </div>
                                      <div className="start-spacer-parent8">
                                        <div className="start-spacer10">
                                          <div className="start-spacer-child8" />
                                          <div className="column-start-mark-hide-norma10" />
                                        </div>
                                        <img
                                          className="frame-child109"
                                          alt=""
                                          src="/group-134984.svg"
                                        />
                                        <div className="end-spacer10">
                                          <div className="end-spacer-child8" />
                                          <div className="column-end-mark-hide-normall10" />
                                        </div>
                                        <div className="labelfilled-parent12">
                                          <div className="lmnop82">
                                            Performance
                                          </div>
                                          <div className="icons10" />
                                        </div>
                                      </div>
                                    </div>
                                    <b className="lmnop158">200</b>
                                    <b className="lmnop159">198</b>
                                    <b className="lmnop160">134</b>
                                    <b className="lmnop161">130</b>
                                    <b className="lmnop162">130</b>
                                    <div className="group-child63" />
                                    <div className="group-child64" />
                                    <div className="group-child65" />
                                    <img
                                      className="dividers-icon56"
                                      alt=""
                                      src="/dividers24.svg"
                                    />
                                    <div className="group-child66" />
                                    <div className="group-child67" />
                                    <div className="group-child68" />
                                  </div>
                                  <div className="start-spacer-parent17">
                                    <div className="start-spacer10">
                                      <div className="start-spacer-child8" />
                                      <div className="column-start-mark-hide-norma10" />
                                    </div>
                                    <img
                                      className="frame-child109"
                                      alt=""
                                      src="/group-134985.svg"
                                    />
                                    <div className="end-spacer10">
                                      <div className="end-spacer-child8" />
                                      <div className="column-end-mark-hide-normall10" />
                                    </div>
                                    <div className="labelfilled-parent12">
                                      <div className="lmnop82">Tribe</div>
                                      <div className="icons10" />
                                    </div>
                                  </div>
                                </div>
                                <div className="rectangle-parent13">
                                  <div className="group-child69" />
                                  <div className="lmnop163">Active User</div>
                                </div>
                              </div>
                            </div>
                            <div className="image-3-wrapper3">
                              <img
                                className="image-3-icon5"
                                alt=""
                                src="/image-3@2x.png"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="model-footer1">
                          <div className="button-outline-parent1">
                            <div className="button-outline6">
                              <div className="label199">Reject</div>
                            </div>
                            <div className="button6">
                              <div className="label199">Approve</div>
                            </div>
                          </div>
                          <img
                            className="dividers-icon57"
                            alt=""
                            src="/dividers23.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-divider-onoff29" />
              </div>
              <div className="image-3-wrapper3">
                <img className="image-3-icon5" alt="" src="/image-3@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb3">
        <div className="item-13" onClick={onItem1TextClick}>
          Surveys
        </div>
        <img className="px-drag4" alt="" src="/chevronright2.svg" />
        <div className="time-utilized13">...</div>
        <img className="input-inner" alt="" src="/chevronright3.svg" />
        <div className="item-33">Reports</div>
      </div>
      <div className="topnavigation2">
        <div className="lhs2">
          <img className="logo-icon2" alt="" src="/logo1.svg" />
          <div className="breadcrumb4">
            <div className="label211">Dashboard</div>
            <img
              className="px-drag4"
              alt=""
              src="/iconschevron-right-black-24dp4.svg"
            />
            <div className="time-utilized13">...</div>
            <img
              className="input-inner"
              alt=""
              src="/iconschevron-right-black-24dp5.svg"
            />
            <div className="item-33">View Details</div>
          </div>
        </div>
        <div className="rhs2">
          <div className="notification2">
            <img
              className="iconsnotification-24dp2"
              alt=""
              src="/iconsnotification-24dp.svg"
            />
            <div className="dotinitial2">
              <div className="div90">1</div>
            </div>
          </div>
          <div className="profilecircleinitial14">
            <div className="aa14">AA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task16;
