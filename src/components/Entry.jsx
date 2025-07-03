import React from "react"


function Entry({emoji, name, meaning}) {
    return (
        <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emoji}
            </span>
            <span>{name}</span>
          </dt>
          <dd>
            {meaning}
          </dd>
        </div>
      </dl>
    )
}

export default Entry