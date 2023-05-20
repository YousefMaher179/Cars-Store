import React from "react";
import classes from "./TestimonialCard.module.css";

const TestimonialCard = (props) => {
  return (
    <div className={classes["card-container"]}>
      <div className={classes.description}>
        <p>{props.description}</p>
      </div>
      <div className={classes.stars}>
        <svg viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4182 24.0607L15.1926 23.9466L14.967 24.0607L8.56549 27.2968C7.44911 27.8612 6.0797 27.4408 5.50509 26.3898C5.27702 25.9727 5.19912 25.4969 5.28149 25.0351L6.50408 18.1808L6.55171 17.9137L6.35378 17.7282L1.17483 12.874C0.290781 12.0454 0.273365 10.6936 1.13419 9.84447C1.47945 9.50387 1.93471 9.27967 2.43065 9.21037L9.58777 8.21035L9.84487 8.17443L9.96341 7.94347L13.1642 1.70726C13.7101 0.643579 15.0672 0.189117 16.1988 0.72617C16.6461 0.938405 17.004 1.28452 17.221 1.70725L20.4218 7.94347L20.5403 8.17443L20.7974 8.21035L27.9545 9.21037C29.2043 9.38499 30.0369 10.4897 29.8621 11.6463C29.7921 12.1101 29.5645 12.542 29.2103 12.874L24.0314 17.7282L23.8335 17.9137L23.8811 18.1808L25.1037 25.0351C25.3092 26.187 24.5064 27.311 23.2624 27.5162C22.7685 27.5976 22.2611 27.52 21.8197 27.2968L15.4182 24.0607Z"
            fill="#EBD8B8"
            stroke="#F8D7A4"
          />
        </svg>
        <svg viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4182 24.0607L15.1926 23.9466L14.967 24.0607L8.56549 27.2968C7.44911 27.8612 6.0797 27.4408 5.50509 26.3898C5.27702 25.9727 5.19912 25.4969 5.28149 25.0351L6.50408 18.1808L6.55171 17.9137L6.35378 17.7282L1.17483 12.874C0.290781 12.0454 0.273365 10.6936 1.13419 9.84447C1.47945 9.50387 1.93471 9.27967 2.43065 9.21037L9.58777 8.21035L9.84487 8.17443L9.96341 7.94347L13.1642 1.70726C13.7101 0.643579 15.0672 0.189117 16.1988 0.72617C16.6461 0.938405 17.004 1.28452 17.221 1.70725L20.4218 7.94347L20.5403 8.17443L20.7974 8.21035L27.9545 9.21037C29.2043 9.38499 30.0369 10.4897 29.8621 11.6463C29.7921 12.1101 29.5645 12.542 29.2103 12.874L24.0314 17.7282L23.8335 17.9137L23.8811 18.1808L25.1037 25.0351C25.3092 26.187 24.5064 27.311 23.2624 27.5162C22.7685 27.5976 22.2611 27.52 21.8197 27.2968L15.4182 24.0607Z"
            fill="#EBD8B8"
            stroke="#F8D7A4"
          />
        </svg>
        <svg viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4182 24.0607L15.1926 23.9466L14.967 24.0607L8.56549 27.2968C7.44911 27.8612 6.0797 27.4408 5.50509 26.3898C5.27702 25.9727 5.19912 25.4969 5.28149 25.0351L6.50408 18.1808L6.55171 17.9137L6.35378 17.7282L1.17483 12.874C0.290781 12.0454 0.273365 10.6936 1.13419 9.84447C1.47945 9.50387 1.93471 9.27967 2.43065 9.21037L9.58777 8.21035L9.84487 8.17443L9.96341 7.94347L13.1642 1.70726C13.7101 0.643579 15.0672 0.189117 16.1988 0.72617C16.6461 0.938405 17.004 1.28452 17.221 1.70725L20.4218 7.94347L20.5403 8.17443L20.7974 8.21035L27.9545 9.21037C29.2043 9.38499 30.0369 10.4897 29.8621 11.6463C29.7921 12.1101 29.5645 12.542 29.2103 12.874L24.0314 17.7282L23.8335 17.9137L23.8811 18.1808L25.1037 25.0351C25.3092 26.187 24.5064 27.311 23.2624 27.5162C22.7685 27.5976 22.2611 27.52 21.8197 27.2968L15.4182 24.0607Z"
            fill="#EBD8B8"
            stroke="#F8D7A4"
          />
        </svg>
        <svg viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4182 24.0607L15.1926 23.9466L14.967 24.0607L8.56549 27.2968C7.44911 27.8612 6.0797 27.4408 5.50509 26.3898C5.27702 25.9727 5.19912 25.4969 5.28149 25.0351L6.50408 18.1808L6.55171 17.9137L6.35378 17.7282L1.17483 12.874C0.290781 12.0454 0.273365 10.6936 1.13419 9.84447C1.47945 9.50387 1.93471 9.27967 2.43065 9.21037L9.58777 8.21035L9.84487 8.17443L9.96341 7.94347L13.1642 1.70726C13.7101 0.643579 15.0672 0.189117 16.1988 0.72617C16.6461 0.938405 17.004 1.28452 17.221 1.70725L20.4218 7.94347L20.5403 8.17443L20.7974 8.21035L27.9545 9.21037C29.2043 9.38499 30.0369 10.4897 29.8621 11.6463C29.7921 12.1101 29.5645 12.542 29.2103 12.874L24.0314 17.7282L23.8335 17.9137L23.8811 18.1808L25.1037 25.0351C25.3092 26.187 24.5064 27.311 23.2624 27.5162C22.7685 27.5976 22.2611 27.52 21.8197 27.2968L15.4182 24.0607Z"
            fill="#EBD8B8"
            stroke="#F8D7A4"
          />
        </svg>
        <svg viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.4182 24.0607L15.1926 23.9466L14.967 24.0607L8.56549 27.2968C7.44911 27.8612 6.0797 27.4408 5.50509 26.3898C5.27702 25.9727 5.19912 25.4969 5.28149 25.0351L6.50408 18.1808L6.55171 17.9137L6.35378 17.7282L1.17483 12.874C0.290781 12.0454 0.273365 10.6936 1.13419 9.84447C1.47945 9.50387 1.93471 9.27967 2.43065 9.21037L9.58777 8.21035L9.84487 8.17443L9.96341 7.94347L13.1642 1.70726C13.7101 0.643579 15.0672 0.189117 16.1988 0.72617C16.6461 0.938405 17.004 1.28452 17.221 1.70725L20.4218 7.94347L20.5403 8.17443L20.7974 8.21035L27.9545 9.21037C29.2043 9.38499 30.0369 10.4897 29.8621 11.6463C29.7921 12.1101 29.5645 12.542 29.2103 12.874L24.0314 17.7282L23.8335 17.9137L23.8811 18.1808L25.1037 25.0351C25.3092 26.187 24.5064 27.311 23.2624 27.5162C22.7685 27.5976 22.2611 27.52 21.8197 27.2968L15.4182 24.0607Z"
            fill="#EBD8B8"
            stroke="#F8D7A4"
          />
        </svg>
      </div>
      <div className={classes["text-box"]}>
        <h2>{props.name}</h2>
        <p>{props.area}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;