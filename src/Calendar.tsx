import React from 'react';

type CalendarProps = {};

type CalendarState = {};

export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    public render() {
        return (
            <>
                <style>
                    {`.Calendar-tabs { display: flex; }`}
                    {`.Calendar-tab { flex: 1; }`}
                </style>
                <div className="Calendar">
                    <div className="Calendar-tabs">
                        <div className="Calendar-tab">Monday</div>
                        <div className="Calendar-tab">Tuesday</div>
                        <div className="Calendar-tab">Wednesday</div>
                        <div className="Calendar-tab">Thurday</div>
                        <div className="Calendar-tab">Friday</div>
                        <div className="Calendar-tab">Saturday</div>
                        <div className="Calendar-tab">Sunday</div>
                    </div>
                    <div className="Calendar-tracks">
                        <div className="Calendar-track"></div>
                        <div className="Calendar-track"></div>
                        <div className="Calendar-track"></div>
                        <div className="Calendar-track"></div>
                        <div className="Calendar-track"></div>
                        <div className="Calendar-track"></div>
                        <div className="Calendar-track"></div>
                    </div>
                </div>
            </>
        );
    }

    private renderTrack() {
        
    }
}
