---
title: Pulse Oximeter
summary: A pulse oximeter built from scratch, with a custom PCB and a Poké Ball-inspired case.
date: 2022-10-01
end: 2023-06-01
context: UCLA BMES Build Team
tags: [medical device development]
cover: ../../assets/projects/pulse-oximeter/08.jpg
coverAlt: Completed pulse oximeter in a 3D-printed Poké Ball case
role: Team of 4
stack:
  - Arduino Nano
  - MCP6041 op-amps
  - EAGLE PCB
  - Processing
  - Autodesk Fusion 360
links:
  video: https://drive.google.com/file/d/1vm91t-d_Ll8JO2v1jZLxdfhqvfNx5zLc/view?usp=sharing
---

> A pulse oximeter is a medical device that measures your blood oxygen levels and pulse.

During my sophomore year, I built a pulse oximeter from scratch with a team of four, using circuitry, CAD, and software development. This project was part of the Biomedical Engineering Society (BMES) at UCLA's Build Team technical project.

![Pulse waveform displayed in Processing](../../assets/projects/pulse-oximeter/01.png)

*Pulse reading.*

We used Processing to handle the pulse signal and display the waveform in an easily readable way. The pulse rate was calculated with a peak-detection algorithm we developed. Here's a [real-time video](https://drive.google.com/file/d/1vm91t-d_Ll8JO2v1jZLxdfhqvfNx5zLc/view?usp=sharing).

![Breadboarded pulse sensing circuit](../../assets/projects/pulse-oximeter/02.png)

*Breadboarded circuit.*

To detect the pulse, we used a red LED and a photodiode to capture absorbance, which changes with blood volume in the finger. The sensing circuit amplifies the signal with MCP6041 op-amps and filters it with capacitors, with an Arduino as the microcontroller. We breadboarded it first, then recreated it in EAGLE to make a printed circuit board.

![Circuit schematic](../../assets/projects/pulse-oximeter/03.jpg)

*Circuit schematic.*

![PCB layout](../../assets/projects/pulse-oximeter/04.jpg)

*PCB design.*

Once the PCB was printed, we soldered the components onto the board. The PCB was designed to sit on top of an Arduino Nano.

![Soldering components onto the PCB](../../assets/projects/pulse-oximeter/05.png)

*Soldering in progress.*

The casing for the electronics was designed in Autodesk Fusion 360. We modeled it on the beloved Poké Ball, with a hole for users to insert their finger for a pulse reading.

![CAD model of the casing](../../assets/projects/pulse-oximeter/06.png)

*CAD of the casing.*

![3D-printed casing](../../assets/projects/pulse-oximeter/07.png)

*Printed model.*

![PCB inserted into the casing](../../assets/projects/pulse-oximeter/09.png)

*PCB inserted into the casing.*

Our final device successfully read our pulse! We presented it at a Demo Day at the end of the school year alongside the other BMES technical projects.

![The team at Demo Day](../../assets/projects/pulse-oximeter/10.jpg)

*My team at our Demo Day!*
