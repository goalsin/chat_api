




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>expressjsguide/res/app.js at master · azat-co/expressjsguide · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="azat-co/expressjsguide" name="twitter:title" /><meta content="expressjsguide - Express.js Guide code examples" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/1137314?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/1137314?s=400" property="og:image" /><meta content="azat-co/expressjsguide" property="og:title" /><meta content="https://github.com/azat-co/expressjsguide" property="og:url" /><meta content="expressjsguide - Express.js Guide code examples" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="DED997DB:0206:3E58C3D:534B1D84" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="sONWv3GAYLr2FdcTweTdMCCRe41unrExozPgo9wgJUU=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-9bb53a970698e77802f98db076a34f260ae63ee3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-24972a8594e0dd0863bc8eacfe2fb93cec3b854f.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-e74c47b047378bd1da6e54f064c49571a2b70565.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a1fec3e73d87f3550c635e371c8519308940f4b4.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="d214ff40e069409bc0fb6fc672847713">

        <link data-pjax-transient rel='permalink' href='/azat-co/expressjsguide/blob/c6020a2fcfd31eadb9b88902da13bb5e93f2fa20/res/app.js'>

  <meta name="description" content="expressjsguide - Express.js Guide code examples" />

  <meta content="1137314" name="octolytics-dimension-user_id" /><meta content="azat-co" name="octolytics-dimension-user_login" /><meta content="12418740" name="octolytics-dimension-repository_id" /><meta content="azat-co/expressjsguide" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="12418740" name="octolytics-dimension-repository_network_root_id" /><meta content="azat-co/expressjsguide" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/azat-co/expressjsguide/commits/master.atom" rel="alternate" title="Recent Commits to expressjsguide:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fazat-co%2Fexpressjsguide%2Fblob%2Fmaster%2Fres%2Fapp.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="azat-co/expressjsguide"
      data-branch="master"
      data-sha="70d0a2decb638128be748d5bbe08460040688d95"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="azat-co/expressjsguide" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fazat-co%2Fexpressjsguide"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/azat-co/expressjsguide/stargazers">
      37
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fazat-co%2Fexpressjsguide"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/azat-co/expressjsguide/network" class="social-count">
        15
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/azat-co" class="url fn" itemprop="url" rel="author"><span itemprop="title">azat-co</span></a></span><span class="path-divider">/</span><strong><a href="/azat-co/expressjsguide" class="js-current-repository js-repo-home-link">expressjsguide</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/azat-co/expressjsguide" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /azat-co/expressjsguide">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/azat-co/expressjsguide/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /azat-co/expressjsguide/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>2</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/azat-co/expressjsguide/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /azat-co/expressjsguide/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/azat-co/expressjsguide/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /azat-co/expressjsguide/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/azat-co/expressjsguide/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /azat-co/expressjsguide/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/azat-co/expressjsguide/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /azat-co/expressjsguide/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/azat-co/expressjsguide.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/azat-co/expressjsguide.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/azat-co/expressjsguide" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/azat-co/expressjsguide" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/azat-co/expressjsguide/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download azat-co/expressjsguide as a zip file"
                   title="Download azat-co/expressjsguide as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:e50ab3a4dd6deae3713399cc13b0bda4 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/azat-co/expressjsguide/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/azat-co/expressjsguide/blob/gh-pages/res/app.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/azat-co/expressjsguide/blob/master/res/app.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/azat-co/expressjsguide" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">expressjsguide</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/azat-co/expressjsguide/tree/master/res" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">res</span></a></span><span class="separator"> / </span><strong class="final-path">app.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="res/app.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://1.gravatar.com/avatar/018ed670c2d7e6e8085e97ffc820a123?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><span rel="author">Peter deHaan</span></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2013-10-15T17:04:21-07:00" title="2013-10-16 08:04:21">October 15, 2013</time>
    <div class="commit-title">
        <a href="/azat-co/expressjsguide/commit/5396912285bfb56018b562672723c707ebfa4261" class="message" data-pjax="true" title="Resolving some JSHint warnings">Resolving some JSHint warnings</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Azat Mardanov" class=" js-avatar" data-user="1137314" height="24" src="https://avatars0.githubusercontent.com/u/1137314?s=140" width="24" />
            <a href="/azat-co">azat-co</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>98 lines (80 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.674 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/azat-co/expressjsguide/raw/master/res/app.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/azat-co/expressjsguide/blame/master/res/app.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/azat-co/expressjsguide/commits/master/res/app.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><br/></div><div class='line' id='LC2'><span class="cm">/**</span></div><div class='line' id='LC3'><span class="cm"> * Module dependencies.</span></div><div class='line' id='LC4'><span class="cm"> */</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="kd">var</span> <span class="nx">express</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;express&#39;</span><span class="p">);</span></div><div class='line' id='LC7'><span class="kd">var</span> <span class="nx">routes</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./routes&#39;</span><span class="p">);</span></div><div class='line' id='LC8'><span class="kd">var</span> <span class="nx">user</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./routes/user&#39;</span><span class="p">);</span></div><div class='line' id='LC9'><span class="kd">var</span> <span class="nx">http</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;http&#39;</span><span class="p">);</span></div><div class='line' id='LC10'><span class="kd">var</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;path&#39;</span><span class="p">);</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="kd">var</span> <span class="nx">app</span> <span class="o">=</span> <span class="nx">express</span><span class="p">();</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'><span class="c1">// all environments</span></div><div class='line' id='LC15'><span class="nx">app</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">&#39;port&#39;</span><span class="p">,</span> <span class="nx">process</span><span class="p">.</span><span class="nx">env</span><span class="p">.</span><span class="nx">PORT</span> <span class="o">||</span> <span class="mi">3000</span><span class="p">);</span></div><div class='line' id='LC16'><span class="nx">app</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">&#39;views&#39;</span><span class="p">,</span> <span class="nx">__dirname</span> <span class="o">+</span> <span class="s1">&#39;/views&#39;</span><span class="p">);</span></div><div class='line' id='LC17'><span class="nx">app</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">&#39;view engine&#39;</span><span class="p">,</span> <span class="s1">&#39;jade&#39;</span><span class="p">);</span></div><div class='line' id='LC18'><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="nx">favicon</span><span class="p">());</span></div><div class='line' id='LC19'><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="nx">logger</span><span class="p">(</span><span class="s1">&#39;dev&#39;</span><span class="p">));</span></div><div class='line' id='LC20'><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="nx">bodyParser</span><span class="p">());</span></div><div class='line' id='LC21'><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="nx">methodOverride</span><span class="p">());</span></div><div class='line' id='LC22'><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">router</span><span class="p">);</span></div><div class='line' id='LC23'><span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="kr">static</span><span class="p">(</span><span class="nx">path</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="nx">__dirname</span><span class="p">,</span> <span class="s1">&#39;public&#39;</span><span class="p">)));</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="c1">// development only</span></div><div class='line' id='LC26'><span class="k">if</span> <span class="p">(</span><span class="s1">&#39;development&#39;</span> <span class="o">==</span> <span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;env&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="nx">app</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">express</span><span class="p">.</span><span class="nx">errorHandler</span><span class="p">());</span></div><div class='line' id='LC28'><span class="p">}</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">,</span> <span class="nx">routes</span><span class="p">.</span><span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC31'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/users&#39;</span><span class="p">,</span> <span class="nx">user</span><span class="p">.</span><span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/render&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">&#39;render&#39;</span><span class="p">);</span></div><div class='line' id='LC35'><span class="p">});</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/render-title&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">&#39;index&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Express.js Guide&#39;</span><span class="p">});</span></div><div class='line' id='LC39'><span class="p">});</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/locals&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">locals</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Express.js Guide&#39;</span> <span class="p">};</span></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">render</span><span class="p">(</span><span class="s1">&#39;index&#39;</span><span class="p">);</span></div><div class='line' id='LC44'><span class="p">});</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/set-html&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="c1">//some code</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">&#39;Content-type&#39;</span><span class="p">,</span> <span class="s1">&#39;text/html&#39;</span><span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">end</span><span class="p">(</span><span class="s1">&#39;&lt;html&gt;&lt;body&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&lt;h1&gt;Express.js Guide&lt;/h1&gt;&#39;</span> <span class="o">+</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&lt;/body&gt;&lt;/html&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC52'><span class="p">});</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/set-csv&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;title, tags\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Express.js Guide, node.js express.js\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Rapid Prototyping with JS, backbone.js, node.js, mongodb\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;JavaScript: The Good Parts, javascript\n&#39;</span><span class="p">;</span></div><div class='line' id='LC59'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">set</span><span class="p">({</span><span class="s1">&#39;Content-Type&#39;</span><span class="o">:</span> <span class="s1">&#39;text/plain&#39;</span><span class="p">,</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Content-Length&#39;</span><span class="o">:</span> <span class="nx">body</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;Set-Cookie&#39;</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;type=reader&#39;</span><span class="p">,</span> <span class="s1">&#39;language=javascript&#39;</span><span class="p">]});</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">end</span><span class="p">(</span><span class="nx">body</span><span class="p">);</span></div><div class='line' id='LC63'><span class="p">});</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/status&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">status</span><span class="p">(</span><span class="mi">200</span><span class="p">).</span><span class="nx">send</span><span class="p">(</span><span class="s1">&#39;alive&#39;</span><span class="p">);</span></div><div class='line' id='LC67'><span class="p">});</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/send-ok&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="mi">200</span><span class="p">,</span> <span class="p">{</span><span class="nx">message</span><span class="o">:</span> <span class="s1">&#39;Data was submitted successfully.&#39;</span><span class="p">});</span></div><div class='line' id='LC71'><span class="p">});</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/send-err&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="mi">500</span><span class="p">,</span> <span class="p">{</span><span class="nx">message</span><span class="o">:</span> <span class="s1">&#39;Oops, the server is down.&#39;</span><span class="p">});</span></div><div class='line' id='LC75'><span class="p">});</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/send-buf&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="s1">&#39;Content-Type&#39;</span><span class="p">,</span> <span class="s1">&#39;text/plain&#39;</span><span class="p">);</span></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="k">new</span> <span class="nx">Buffer</span><span class="p">(</span><span class="s1">&#39;CSV data in text format&#39;</span><span class="p">));</span></div><div class='line' id='LC80'><span class="p">});</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/json&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">json</span><span class="p">(</span><span class="mi">200</span><span class="p">,</span> <span class="p">[{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Express.js Guide&#39;</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="s1">&#39;node.js express.js&#39;</span><span class="p">},</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Rapid Prototyping with JS&#39;</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="s1">&#39;backbone.js, node.js, mongodb&#39;</span><span class="p">},</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;JavaScript: The Good Parts&#39;</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="s1">&#39;javascript&#39;</span><span class="p">}</span></div><div class='line' id='LC86'>&nbsp;&nbsp;<span class="p">]);</span></div><div class='line' id='LC87'><span class="p">});</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;/jsonp&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">jsonp</span><span class="p">(</span><span class="mi">200</span><span class="p">,</span> <span class="p">[{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Express.js Guide&#39;</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="s1">&#39;node.js express.js&#39;</span><span class="p">},</span></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;Rapid Prototyping with JS&#39;</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="s1">&#39;backbone.js, node.js, mongodb&#39;</span><span class="p">},</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span><span class="nx">title</span><span class="o">:</span> <span class="s1">&#39;JavaScript: The Good Parts&#39;</span><span class="p">,</span> <span class="nx">tags</span><span class="o">:</span> <span class="s1">&#39;javascript&#39;</span><span class="p">}</span></div><div class='line' id='LC93'>&nbsp;&nbsp;<span class="p">]);</span></div><div class='line' id='LC94'><span class="p">});</span></div><div class='line' id='LC95'><span class="nx">http</span><span class="p">.</span><span class="nx">createServer</span><span class="p">(</span><span class="nx">app</span><span class="p">).</span><span class="nx">listen</span><span class="p">(</span><span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;port&#39;</span><span class="p">),</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC96'>&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Express server listening on port &#39;</span> <span class="o">+</span> <span class="nx">app</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;port&#39;</span><span class="p">));</span></div><div class='line' id='LC97'><span class="p">});</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03182s from github-fe128-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

