# DeepFlow
![DeepFlow UI](https://cdn.discordapp.com/attachments/843207003173421059/845914273426178058/unknown.png)
## Description
Our project aims to help students, especially those in high school and college, adjust to a new medium of learning
with the necessary tools. By looking at brain waves associated with focus levels, we can improve concentration, which
in turn enhances the online learning experience.

## The Struggles of E-Learning
Since the beginning of the pandemic, millions of students have moved to online learning.
This sudden shift has led students to have to face new challenges, such as:
- The loss of concentration during class
    - Missing important information and due dates
- Incomplete school work due to internal and external distractions
    - Internal: anxiety and emotional distress, peer pressure
    - External: family time, the aroma of food
- Mental fatigue
    - Lack of motivation to study and keep up with classes
    - Brain fog 
 
## The Solution
Approaching the concentration problem...
- During study or work time, when signals of lack of focus are detected, the users would get notified to focus
    - Low gamma waves + high alpha waves = low focus 
    - Knows when to get back to task without having to worry

## How It Works
Youtube: https://youtu.be/oZV_FBJ0N7I
## Results
![Results From EEG Signals](https://raw.githubusercontent.com/christoukmaji/NeuroHackaTOR/main/Screen%20Shot%202021-05-22%20at%2011.54.46%20PM.png)
## Project Architecture
![Flowchart](https://raw.githubusercontent.com/christoukmaji/NeuroHackaTOR/main/Screen%20Shot%202021-05-22%20at%2011.52.38%20PM.png)
## Technology Used 
- Web Application: React
- Data Cleaning and Analysis: Python
- Hardware: 8-channel OpenBCI Cyton Board
## Public EEG Datasets
- We wanted to test our implementation with professionally-taken data(i.e. multiple participants,
multiple trials, 64-channel EEG) to see if our results improved, diminished, or remained consistent.
- Below is a randomly-selected sample that begins with a student in a “non-focused” state, then transitions to a “focused state”
![Graphs](https://raw.githubusercontent.com/christoukmaji/NeuroHackaTOR/main/Screen%20Shot%202021-05-22%20at%2011.55.02%20PM.png)
## Problems and Future Improvements
- Noisy user data 
  - Most likely because we used tape instead of electrode glue
- Algorithmic Improvements
  - An fine-tuned algorithm that clearly defines the difference between the state of
   “focus” and the state of “distraction”
- User Friendly
    - “Game-ify” the not-focused notification
    - Possible range of choices that users can choose to set as reminders
        -  ex. animal gifs, encouraging texts, fun bgm, tips to focus, etc.

## Team
Chris Toukmaji, Cally Lin, Michelle Sheu, Ari Iramanesh, Jessica Yoon.
