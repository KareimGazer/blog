---
title: The KISS Principle
subtitle: Keep It Simple Stupid
date: 2024-07-26
author: '@KareimGazer'
lastUpdated: true
next:
  text: 'Future Forecasting Of Time Series'
  link: './Future_Forecasting_Of_Time_Series'
prev:
  text: 'Unlocking Success'
  link: './Unlocking_Success.md'
---

This principle was drawn from aircraft engineering by Kelly Johnson who stated that all systems work better if they are kept simple.

---

Unix follows this philosophy by making each program do one thing well, and do a new job to build a fresh new program rather than complicating old programs by adding new features.

You can see this in UNIX with all the built-in utilities and tools like cat, and grep which can be combined with pipe to compose and construct new functionalities

Some UNIX design rules by Eric S. Raymond in his book “The Art of UNIX Programming” make this principle clearer.

- build modular programs
- write readable, simple, small, transparent, robust programs
- use composition
- separate mechanisms from policies
- make data complicated when required not the program
- build on the user’s expected knowledge
- avoid unnecessary output
- write programs which fail in a way that is easy to diagnose
- value programmer time over machine time
- write abstract programs that generate code instead of writing code by hand
- prototype software before polishing it
- write flexible and open programs
- make the programs and protocols extensible

Start small and think about the layers of your project—work from general abstract concepts down to a lower level of detail. Divide complex functionality into simple functions with well-defined names. Keep doing this until all is clear and clean.
