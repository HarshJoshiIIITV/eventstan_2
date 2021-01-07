import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "react-select";
import "./Popup.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Popup = ({ title, target_event_id }) => {
  const [form, setForm] = useState({});
  const [filters, setFilters] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        `https://api.eventstan.com/user/event-form?eventTypeId=${target_event_id}`
      )
      .then((resp) => {
        const x = {
          eventTypeId: target_event_id,
          userId: "3",
          filters: [],
        };
        const fil = [];
        resp.data.data.result.filters.forEach((f) => {
          f.filterId = f._id;
          delete f._id;
          if (f.type === 7) {
            f.set = true;
          } else if (f.type === 6) {
            f.startTime = "";
            f.endTime = "";
          } else if (f.type === 5) {
            f.time = "";
          } else if (f.type === 3) {
            f.date = "";
          } else if (f.type === 4) {
            f.startDate = "";
            f.endDate = "";
          } else if (f.type === 1) {
            f.set = false;
          } else if (f.type === 8) {
            f.location = [{ address: "", longitude: "", lattitude: "" }];
            f.set = false;
          }
          fil.push(f);
        });
        setForm({ ...x, filters: fil });
        setFilters(resp.data.data.result.filters);
      });
  }, [target_event_id]);

  const handleChange = (value, type, index, t = null) => {
    const fi = form;
    if (type === 7) {
      fi.filters[index] = {
        ...fi.filters[index],
        membersMinRange: value[0],
        membersMaxRange: value[1],
        set: true,
      };
    } else if (type === 6) {
      if (t === "startTime") {
        fi.filters[index] = {
          ...fi.filters[index],
          startTime: value,
          set: true,
        };
      }
      if (t === "endTime") {
        fi.filters[index] = {
          ...fi.filters[index],
          endTime: value,
          set: true,
        };
      }
    } else if (type === 5) {
      fi.filters[index] = {
        ...fi.filters[index],
        time: value,
        set: true,
      };
    } else if (type === 3) {
      fi.filters[index] = {
        ...fi.filters[index],
        date: value,
        set: true,
      };
    } else if (type === 4) {
      if (t === "startDate") {
        fi.filters[index] = {
          ...fi.filters[index],
          startDate: value,
          set: true,
        };
      }
      if (t === "endDate") {
        fi.filters[index] = {
          ...fi.filters[index],
          endDate: value,
          set: true,
        };
      }
    } else if (type === 1) {
      fi.filters[index] = {
        ...fi.filters[index],
        singleSelect: value,
        set: true,
      };
    } else if (type === 2) {
      fi.filters[index] = {
        ...fi.filters[index],
        multiSelect: value ? value.map((v) => v.value) : [],
        set: value ? true : false,
      };
    }
    setForm({ ...fi });
  };

  const createEvent = () => {
    let valid = true;
    form.filters.forEach((f) => {
      if (!f.set) {
        setError(f.name + " is required field");
        valid = false;
        return;
      }
      delete f.name;
    });
    if (valid) {
      console.log({ ...form, eventName: title });
      axios
        .post("https://api.eventstan.com/user/event", {
          ...form,
          eventName: title,
        })
        .then(
          (r) => {
            history.push(
              "/venuedetail/" + r.data.data.eventTypeId + "/" + r.data.data._id
            );
          },
          (err) => {
            console.log(err.response);
          }
        );
    }
  };

  const addAddress = (index, type) => {
    const fi = form;
    fi.filters[index].location.push({
      address: "",
      longitude: 77.7,
      lattitude: 17.23,
    });

    setForm({ ...fi });
  };

  const handleAddressChange = (e, indexOfFilter, indexOfLocation) => {
    const fi = form;
    fi.filters[indexOfFilter].set = true;
    fi.filters[indexOfFilter].location[indexOfLocation] = {
      address: e.target.value,
      longitude: "",
      lattitude: "",
    };
    setForm({ ...fi });
  };

  return (
    <div className="popup" style={{ overflowY: "scroll" }}>
      <h3
        style={{
          overflow: "hidden",
          textAlign: "center",
          padding: "10px",
          borderBottom: "0.5px solid silver",
        }}
      >
        {title}
      </h3>
      <h6 style={{ color: "red" }}>{error}</h6>
      <Row className="create_event_popup" style={{ margin: 0 }}>
        {filters.map((filter, i) => (
          <>
            {filter.type === 7 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <h6>{filter.name}</h6>
                <Row style={{ padding: "10px" }}>
                  {form.filters[i].membersMinRange}
                  <span style={{ marginLeft: "auto" }}>
                    {form.filters[i].membersMaxRange}
                  </span>
                </Row>
                <Range
                  key={i}
                  step={10}
                  defaultValue={[
                    parseInt(filters[i].membersMinRange),
                    parseInt(filters[i].membersMaxRange),
                  ]}
                  min={parseInt(filters[i].membersMinRange)}
                  max={parseInt(filters[i].membersMaxRange)}
                  tipFormatter={(value) => `${value}`}
                  onAfterChange={(values) => {
                    handleChange(values, 7, i);
                  }}
                />
              </Col>
            )}
            {filter.type === 6 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <div>
                  <h6>{filter.name}</h6>
                  <div style={{ display: "flex", justifyContent: "left" }}>
                    <input
                      style={{ width: "120px" }}
                      type="time"
                      id="st"
                      name="st"
                      value={form.filters[i].startTime}
                      onChange={(e) =>
                        handleChange(e.target.value, 6, i, "startTime")
                      }
                    />
                    <input
                      style={{ marginLeft: "10px", width: "120px" }}
                      type="time"
                      id="et"
                      name="et"
                      value={form.filters[i].endTime}
                      onChange={(e) =>
                        handleChange(e.target.value, 6, i, "endTime")
                      }
                    />
                  </div>
                </div>
              </Col>
            )}
            {filter.type === 5 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <div>
                  <h6>{filter.name}</h6>
                  <div style={{ display: "flex", justifyContent: "left" }}>
                    <input
                      style={{ width: "120px" }}
                      type="time"
                      id="appt"
                      name="appt"
                      value={form.filters[i].time}
                      onChange={(e) => handleChange(e.target.value, 5, i)}
                    />
                  </div>
                </div>
              </Col>
            )}
            {filter.type === 3 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <div>
                  <h6>{filter.name}</h6>
                  <input
                    type="date"
                    style={{ width: "200px" }}
                    value={form.filters[i].date}
                    onChange={(e) => {
                      handleChange(e.target.value, 3, i);
                    }}
                  />
                </div>
              </Col>
            )}
            {filter.type === 4 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <div>
                  <h6>{filter.name}</h6>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "left",
                    }}
                  >
                    <input
                      type="date"
                      style={{ width: "200px", marginBottom: "10px" }}
                      value={form.filters[i].startDate}
                      onChange={(e) =>
                        handleChange(e.target.value, 4, i, "startDate")
                      }
                    />
                    <input
                      type="date"
                      style={{ width: "200px" }}
                      value={form.filters[i].endDate}
                      onChange={(e) =>
                        handleChange(e.target.value, 4, i, "endDate")
                      }
                    />
                  </div>
                </div>
              </Col>
            )}
            {filter.type === 1 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <h6>{filter.name}</h6>
                <Select
                  name={filter.name}
                  options={filters[i].singleSelect.map((option) => {
                    return { label: option, value: option };
                  })}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={(e) => handleChange(e.value, 1, i)}
                />
              </Col>
            )}
            {filter.type === 2 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <h6>{filter.name}</h6>
                <Select
                  name={filter.name}
                  options={filters[i].multiSelect.map((option) => {
                    return { label: option, value: option };
                  })}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  isMulti
                  onChange={(e) => handleChange(e, 2, i)}
                />
              </Col>
            )}
            {filter.type === 8 && (
              <Col md={6} style={{ marginTop: 10 }} key={i}>
                <h6>{filter.name}</h6>
                <Button onClick={() => addAddress(i, 8)}>Add More</Button>
                {form.filters[i].location.map((l, ind) => (
                  <input
                    style={{ marginTop: "10px" }}
                    type="text"
                    value={l.address}
                    key={ind}
                    onChange={(e) => handleAddressChange(e, i, ind)}
                  />
                ))}
              </Col>
            )}
          </>
        ))}
      </Row>
      <Row style={{ margin: 0 }}>
        <Button
          style={{ margin: "15px auto", backgroundColor: "lightslategray" }}
          onClick={createEvent}
        >
          Lets Create an Event
        </Button>
      </Row>
    </div>
  );
};

export default Popup;
