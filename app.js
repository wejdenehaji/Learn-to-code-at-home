function App() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [expandedSections, setExpandedSections] = React.useState({});
    
    const filteredLanguages = programmingData.filter(language => {
      if (!searchQuery) return true;
      
      const query = searchQuery.toLowerCase();
      
      if (language.name.toLowerCase().includes(query)) return true;
      
      const playlistMatch = language.playlists.some(playlist => 
        playlist.title.toLowerCase().includes(query) || 
        playlist.description.toLowerCase().includes(query)
      );
      
      const videoMatch = language.videos.some(video => 
        video.title.toLowerCase().includes(query) || 
        video.description.toLowerCase().includes(query)
      );
      
      return playlistMatch || videoMatch;
    });
    
    const toggleSection = (languageId) => {
      setExpandedSections(prev => ({
        ...prev,
        [languageId]: !prev[languageId]
      }));
    };
    
    const isSectionExpanded = (languageId) => {
      return expandedSections[languageId] !== false; 
    };
    
    return (
      <div>
        <header>
          <div className="container">
            <div className="header-content">
              <h1>Learn to Code at Home</h1>
              <p className="header-description">
                Access curated playlists and videos for various programming languages and start your coding journey today.
              </p>
              <div className="search-container">
                <input 
                  type="text" 
                  className="search-bar" 
                  placeholder="Search for programming languages or topics..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </header>
        
        <main>
          <div className="container">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map(language => (
                <div className="language-section" key={language.id}>
                  <div 
                    className="language-header" 
                    onClick={() => toggleSection(language.id)}
                  >
                    <div className="language-icon">{language.icon}</div>
                    <h2 className="language-title">{language.name}</h2>
                    <span>{isSectionExpanded(language.id) ? '▼' : '►'}</span>
                  </div>
                  
                  {isSectionExpanded(language.id) && (
                    <div className="language-content">
                      {language.playlists.length > 0 && (
                        <div>
                          <h3 className="section-title">Playlists</h3>
                          <div className="resource-grid">
                            {language.playlists.map(playlist => (
                              <div className="resource-card" key={playlist.id}>
                                <div className="card-thumbnail">
                                  <img src={playlist.thumbnail || "/placeholder.svg"} alt={playlist.title} />
                                  <div className="card-badge">{playlist.level}</div>
                                </div>
                                <div className="card-content">
                                  <h4 className="card-title">{playlist.title}</h4>
                                  <p className="card-description">{playlist.description}</p>
                                  <div className="card-footer">
                                    <span className="card-meta">{playlist.duration}</span>
                                    <a 
                                      href={playlist.url} 
                                      className="card-link" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                    >
                                      Watch Playlist ▶
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    
                      {language.videos.length > 0 && (
                        <div>
                          <h3 className="section-title">Videos</h3>
                          <div className="resource-grid">
                            {language.videos.map(video => (
                              <div className="resource-card" key={video.id}>
                                <div className="card-thumbnail">
                                  <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
                                </div>
                                <div className="card-content">
                                  <h4 className="card-title">{video.title}</h4>
                                  <p className="card-description">{video.description}</p>
                                  <div className="card-footer">
                                    <span className="card-meta">{video.duration}</span>
                                    <a 
                                      href={video.url} 
                                      className="card-link" 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                    >
                                      Watch Video ▶
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No results found</h3>
                <p>Try searching for a different programming language or topic</p>
              </div>
            )}
          </div>
        </main>
        
        <footer>
          <div className="container" style={{ textAlign: 'center', padding: '2rem 0', color: '#718096' }}>
            <p>© Learn to Code at Home. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(<App />);