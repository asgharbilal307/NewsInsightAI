import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hero">
        <span className="hero-badge">News Insight Engine</span>
        <h1>Turn overwhelming news into clear, personalized insights—instantly</h1>
        <p>
          This project builds a database-driven news insight platform where articles, users,
          categories, and analytics are managed with relational design, normalization, indexing,
          and SQL-driven analytics.
        </p>
        <div className="hero-actions">
          <Link to="/login" className="btn btn-primary">
            Log in
          </Link>
          <Link to="/signup" className="btn btn-secondary">
            Sign up
          </Link>
        </div>
      </div>

      <section className="home-section">
        <div className="home-section-header">
          <h2>What the Platform Does</h2>
          <p>Users can search, filter, and analyze news insights without manual reading overload.</p>
        </div>

        <div className="hero-grid home-grid">
          <div className="feature-tile">
            <span className="feature-tile-icon">FILT</span>
            <h3>Search & Filters</h3>
            <p>Filter by category, time, relevance, and other insight dimensions.</p>
          </div>
          <div className="feature-tile">
            <span className="feature-tile-icon">SENT</span>
            <h3>Sentiment Snapshot</h3>
            <p>Summarize sentiment trends to quickly see positive/negative movement.</p>
          </div>
          <div className="feature-tile">
            <span className="feature-tile-icon">ENT</span>
            <h3>Entity Extraction</h3>
            <p>Surface key people/organizations/locations that appear across articles.</p>
          </div>
          <div className="feature-tile">
            <span className="feature-tile-icon">SUM</span>
            <h3>Concise Summaries</h3>
            <p>Generate short summaries that translate raw text into decision-ready insights.</p>
          </div>
          <div className="feature-tile">
            <span className="feature-tile-icon">AUDIT</span>
            <h3>Auditable Metrics</h3>
            <p>Track session-level insight outputs and keep derived values consistent.</p>
          </div>
          <div className="feature-tile">
            <span className="feature-tile-icon">FAST</span>
            <h3>Fast Analytics</h3>
            <p>Use indexed relational reads so insights stay responsive as data grows.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

