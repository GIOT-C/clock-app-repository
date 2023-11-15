import { useState, useEffect } from "react";
import styles from "./DateApp.module.css";
import { TimeDataInterface } from "./TimeDataInterface";
import { GeoDataInterface } from "./GeoDataInterface";
import { RandomQuoteInterface } from "./RandomQuoteInterface";

function DateApp(props: {
  timeData: TimeDataInterface | null;
  geoData: GeoDataInterface | null;
  randomQuotes: RandomQuoteInterface[] | null;
  handleChangeQuote: () => void;
}) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const currentDate = currentTime;
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  return (
    <div className={styles.dateAppContainer}>
      {currentHour > 5 && currentHour < 18 ? (
        <div className={styles.dayTime}>
          {!showMore ? (
            <div className={styles.firstHalf}>
              <div className={styles.randomQuotesContainer}>
                {props.randomQuotes ? (
                  props.randomQuotes.map((quote, index) => (
                    <div key={index} className={styles.randomQuotesDisplay}>
                      <div>
                        <p className={styles.randomQuotes}>
                          "{quote.content}"{" "}
                        </p>
                        <p className={styles.randomQuotesAuthor}>
                          {quote.author}
                        </p>
                      </div>
                      <span>
                        <i
                          className="fa-solid fa-arrows-rotate"
                          onClick={props.handleChangeQuote}
                        ></i>
                      </span>
                    </div>
                  ))
                ) : (
                  <p>loading...</p>
                )}
              </div>
            </div>
          ) : (
            ""
          )}

          <div className={styles.secondHalf}>
            <div className={styles.secondHalfDateContainer}>
              <p>
                <i className="fa-solid fa-sun"></i>{" "}
                {currentHour > 5 && currentHour < 12 ? (
                  <span>GOOD MORNING,</span>
                ) : (
                  <span>GOOD AFTERNOON,</span>
                )}{" "}
                IT'S CURRENTLY
              </p>
              <h1 className={styles.currentTime}>
                {currentHour}
                <span>:</span>
                {currentMinute < 10 ? `0${currentMinute}` : currentMinute}
              </h1>
              <h3>
                IN {props.geoData?.city.toUpperCase()},{" "}
                {props.geoData?.country.toUpperCase()}
              </h3>
            </div>
            <div className={styles.secondHalfMoreContainer}>
              {!showMore ? (
                <div className={styles.moreContainer}>
                  <div>MORE </div>
                  <i
                    className="fa-solid fa-circle-chevron-down"
                    onClick={() => setShowMore(!showMore)}
                  ></i>
                </div>
              ) : (
                <div className={styles.moreContainer}>
                  <div>LESS</div>
                  <i
                    className="fa-solid fa-circle-chevron-up"
                    onClick={() => setShowMore(!showMore)}
                  ></i>
                </div>
              )}
            </div>
          </div>
          {showMore ? (
            <div className={styles.dayTimeThirdHalf}>
              <div className={styles.thirdHalfContainerOne}>
                <div className={styles.timeZoneContainer}>
                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneFirstChild}>
                      CURRENT TIMEZONE
                    </p>
                    <h1 className={styles.timeZoneSecondChild}>
                      {props.timeData?.timezone}
                    </h1>
                  </div>
                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneThirdChild}>DAY OF THE YEAR</p>
                    <h1 className={styles.timeZoneFourthChild}>
                      {props.timeData?.day_of_year}
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.thirdHalfContainerTwo}>
                <div className={styles.timeZoneContainer}>
                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneFirstChild}>DAY OF THE WEEK</p>
                    <h1 className={styles.timeZoneSecondChild}>
                      {props.timeData?.day_of_week}
                    </h1>
                  </div>

                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneThirdChild}>WEEK NUMBER</p>
                    <h1 className={styles.timeZoneFourthChild}>
                      {props.timeData?.week_number}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={styles.nightTime}>
          {!showMore ? (
            <div className={styles.firstHalf}>
              <div className={styles.randomQuotesContainer}>
                {props.randomQuotes ? (
                  props.randomQuotes.map((quote, index) => (
                    <div
                      key={index}
                      className={`${styles.randomQuotesDisplay} ${styles.nightRandomQuotesColor}`}
                    >
                      <div>
                        <p className={styles.randomQuotes}>"{quote.content}"</p>
                        <p className={styles.randomQuotesAuthor}>
                          {quote.author}
                        </p>
                      </div>
                      <span>
                        <i
                          className="fa-solid fa-arrows-rotate"
                          onClick={props.handleChangeQuote}
                        ></i>
                      </span>
                    </div>
                  ))
                ) : (
                  <p>loading...</p>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={styles.secondHalf}>
            <div className={styles.secondHalfDateContainer}>
              <p>
                <i className="fa-solid fa-moon"></i> GOOD EVENING, IT'S
                CURRENTLY
              </p>
              <h1 className={styles.currentTime}>
                {currentHour}:
                {currentMinute < 10 ? `0${currentMinute}` : currentMinute}
              </h1>
              <h3>
                IN {props.geoData?.city.toUpperCase()},{" "}
                {props.geoData?.country.toUpperCase()}
              </h3>
            </div>
            <div className={styles.secondHalfMoreContainer}>
              {!showMore ? (
                <div className={styles.moreContainer}>
                  <div>MORE </div>
                  <i
                    className="fa-solid fa-circle-chevron-down"
                    onClick={() => setShowMore(!showMore)}
                  ></i>
                </div>
              ) : (
                <div className={styles.moreContainer}>
                  <div>LESS</div>
                  <i
                    className="fa-solid fa-circle-chevron-up"
                    onClick={() => setShowMore(!showMore)}
                  ></i>
                </div>
              )}
            </div>
          </div>
          {showMore ? (
            <div className={styles.nightTimeThirdHalf}>
              <div className={styles.thirdHalfContainerOne}>
                <div className={styles.timeZoneContainer}>
                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneFirstChild}>
                      CURRENT TIMEZONE
                    </p>
                    <h1 className={styles.timeZoneSecondChild}>
                      {props.timeData?.timezone}
                    </h1>
                  </div>
                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneThirdChild}>DAY OF THE YEAR</p>
                    <h1 className={styles.timeZoneFourthChild}>
                      {props.timeData?.day_of_year}
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.thirdHalfContainerTwo}>
                <div className={styles.timeZoneContainer}>
                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneFirstChild}>DAY OF THE WEEK</p>
                    <h1 className={styles.timeZoneSecondChild}>
                      {props.timeData?.day_of_week}
                    </h1>
                  </div>

                  <div className={styles.timeZoneData}>
                    <p className={styles.timeZoneThirdChild}>WEEK NUMBER</p>
                    <h1 className={styles.timeZoneFourthChild}>
                      {props.timeData?.week_number}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default DateApp;
