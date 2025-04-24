import React, { useEffect, useState } from "react";

type Sensor = {
    title: string;
    lastMeasurement: {
        value: string;
        createdAt: string;
    };
};

type BoxData = {
    name: string;
    sensors: Sensor[];
};

const HiveBoxViewer: React.FC = () => {
    return ("");
}

export default HiveBoxViewer;