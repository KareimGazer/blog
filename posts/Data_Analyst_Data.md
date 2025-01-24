---
title: Data Analyst - Data
subtitle: All About Data
date: 2025-01-14
author: '@KareimGazer'
lastUpdated: true
next:
  text: 'Building Great Data Products: Part 1 — The Data'
  link: './Building_Great_Data_Products_Part_1_The_Data'
prev:
  text: 'The Kiss Principle'
  link: './The_KISS_Principle'
---

> "Businesses today recognize the untapped value in data and data analytics as a crucial factor for business competitiveness. To drive their data and analytics initiatives, companies are hiring and upskilling people. They're expanding their teams and creating centers of excellence to set up a multipronged data and analytics practice in their organizations." - **The Power Of Data To Transform Your Business, a Forrester report**

---

## Planning

Before collecting data you should have:

1. An understanding of the problem
2. **the desired outcome**: you know “Where you are” and “Where you want to be.“
3. A well-defined metric: you know “What will be measured,” and “How it will be measured.”

The next step is for you is to identify the data you need for your use case by making decisions about:

1. the specific information you need
2. the possible sources for this data

Your goals determine the answers to these questions.

Let’s take the example of a product company that wants to create marketing campaigns targeted towards the age group that buys their products the most. Their goal is to design reach-outs that appeal most to this segment and encourages them to further influence their friends and peers into buying these products.

Based on this use case, some of the obvious information that you will identify includes the customer profile, purchase history, location, age, education, profession, income, and marital status, for example. To ensure you gain even greater insights into this segment, you may also decide to collect the customer complaint data for this segment to understand the kind of issues they face because this could discourage them from recommending your products.

To know how satisfied they were with the resolution of their issues, you collect the ratings from the customer service surveys. Taking this a step forward, you may want to understand how these customers talk about your products on social media and how many of their connections engage with them in these discussions, for example, the likes, shares, and comments their posts receive.

The next step in the process is to define a plan for collecting data. Some of the data you need may be required on an ongoing basis and some over a defined period of time. For collecting website visitor data, for example, you may need to have the numbers refreshed in real-time. But if you’re tracking data for a specific event, you have a definite beginning and end date for collecting the data. In this step, you can also define how much data would be sufficient for you to reach a credible analysis. Is the volume defined by the segment, for example, all customers within the age range of 21 to 30 years; or a dataset of a hundred thousand customers within the age range of 21 to 30. You can also use this step to define the dependencies, risks, mitigation plan, and several other such factors that are relevant to your initiative. The purpose of the plan should be to establish the clarity you need for execution.

## data collection methods

The third step in the process is for you to determine your data collection methods. In this step, you will identify the methods for collecting the data you need. You will define how you will collect the data from the data sources you have identified, such as internal systems, social media sites, or third-party data providers. Your methods will depend on the type of data, the timeframe over which you need the data, and the volume of data.

### Data Types

data can be internal or external to the organization.
primary, secondary or third party sources of data.

- **Primary data**: information obtained directly from internal sources such as data from the organization database, Customer relationship management (CRM), HR or workflow applications. It could also include data you gather directly through surveys, interviews, discussions, observations and focus groups.

- **Secondary data**: also reffered to as public data is information retrieved from sources, such as external databases, research articles, publications, training material and Internet searches, or financial records. We can use web scraping tool to get these data assuming that's available to the public with no restrictions.
This could also include data collected through externally conducted surveys, interviews, discussions, observations and focus groups.

- **3rd party data**: is data you purchase from aggregators who collect data from various sources and combine it into comprehensive datasets purely for the purpose of selling the data that you can access by subcribing to their sevices and access the data using APIs.

so in short primary data is data that's already ready and clean to pull from the database. secondary data are data that still needs to be pulled from the internet through webscraping then cleaned and wrangled. and finally 3rd party data is simply clean data that you clean.

### Data sources

let's look at different sources to gather data:

**Databases** can be a source of primary, secondary and 3rd party data. Most organizations have internal applications for managing their processes, workflows and customers.

**External databases** are available on a subscription basis or for purchase with significant number of businesses have or are currently moving to the cloud, which is increasingly becoming a source for accessing real time information and on demand insights.

Supplementing your primary data with secondary and 3rd party data sources can help you explore problems and solutions in new and meaningful ways.

The Web is a source of publicly available data that is available to companies and individuals for free or commercial use. These could include textbooks, government records, papers, and articles that are for public consumption, social media sites, and interactive platforms such as Facebook, Twitter, Google, YouTube and Instagram are increasingly being used to source user data and opinions. Also, Sensor data produced by wearable devices, smart buildings, smart cities, smart phones, medical devices, even household appliances is a widely used source of data.

**Web scraping**, also known as screen scraping or web harvesting, is used for downloading specific data from web pages based on defined parameters. Among other things, web scraping is used to extract data such as text, contact information, images, videos, podcasts, and product items from a web property.

**RSS feeds** are another source typically used for capturing updated data from online forums and news sites where data is refreshed on an ongoing basis.

**Data streams** are a popular source for aggregating constant streams of data flowing from sources such as instruments, IoT devices and applications, and GPS data from cars. Data streams and feeds are also used for extracting data from social media sites and interactive platforms. This data is generally timestamped and also geo-tagged for geographical identification.

data streams used in:

- stock and market tickers for financial trading
- retail transaction streams for predicting demand and supply chain management
- surveillance and video feeds for threat detection
- social media feeds for sentiment analysis
- sensor data feeds for monitoring industrial or farming machinery
- web click feeds for monitoring web performance and improving design 
- real-time flight events for rebooking and rescheduling

Some popular applications used to process data streams are Apache Kafka, Apache Spark Streaming, and Apache Storm.

RSS (or Really Simple Syndication) feeds, are another popular data source. These are typically used for capturing updated data from online forums and news sites where data is refreshed on an ongoing basis. Using a feed reader, which is an interface that converts RSS text files into a stream of updated data, updates are streamed to user devices.

**Data Exchange platforms** allow the exchange of data between data providers and data consumers. Data Exchanges have a set of well-defined exchange standards, protocols, and formats relevant for exchanging data. These platforms not only facilitate the exchange of data, they also ensure that security and governance are maintained. They provide data licensing workflows, de-identification and protection of personal information, legal frameworks, and a quarantined analytics environment. Examples of popular data exchange platforms include AWS Data Exchange, Crunchbase, Lotame, and Snowflake.

**Census** data is also a commonly used source for gathering household data, such as wealth and income or population data, for example.

**Interviews** are source for gathering qualitative data, such as the participants opinions and experiences. For example, an interview conducted to understand the day-to-day challenges faced by a customer service executive. Interviews could be telephonic over the Web or face to face observation studies include monitoring participants in a specific environment or while performing a particular task.For example, observing users navigate an E Commerce site to assess the.


Based on how well-defined the structure of the data is, data can be categorized into 3 types:

### Structured data

data that follows a rigid format and can be organized neatly into rows and columns. such data from spreadsheets, online forms, sensors, network and web logs are stored in relational databases using a well-defined schema (tables) but structured data can also be stored in non-relationsal databases (NoSQL).

### Semi-structured

data that has some structure properties but not a rigid schema, such as data from emails, XML, zipped files, binary executables, and TCP/IP protocols. emails for example has headers or titles but the body is unstructured text. Semi-structured can be stored in NoSQL clusters. XML and JSON data formats are commonly used for storing and exchanging semi-structured data. JSON is the preferred data type for web services.

### Unstructured data

data that does not have a structure and cannot be organized into a schema, such as data from web pages, social media feeds, images, videos, documents, media logs, and surveys. NoSQL databases and Data Lakes provide a good option to store and manipulate large volumes of unstructured data. Data lakes can accommodate all data types and schema.


## implementing your data collection strategy

Once your plan and data collection methods are finalized, you can implement your data collection strategy and start collecting data. You will be making updates to your plan as you go along because conditions evolve as you implement the plan on the ground.

Working with data from disparate sources without considering how it measures against the quality metric can lead to failure. In order to be reliable, data needs to be free of errors, accurate, complete, relevant, and accessible.

You need to define the quality traits, the metric, and the checkpoints in order to ensure that your analysis is going to be based on quality data.

### Data Governance & Privacy

You also need to watch out for issues pertaining to data governance, such as, security, regulation, and compliances.

Data Governance policies and procedures relate to the usability, integrity, and availability of data. Penalties for non-compliance can run into millions of dollars and can hurt the credibility of not just your findings, but also your organization.

Another important consideration is data privacy. Data you collect needs to check the boxes for confidentiality, license for use, and compliance to mandated regulations. Checks, validations, and an auditable trail needs to be planned. Loss of trust in the data used for analysis can compromise the process, result in suspect findings, and invite penalties. Identifying the right data is a very important step of the data analysis process. Done right, it will ensure that you are able to look at a problem from multiple perspectives and your findings are credible and reliable.

