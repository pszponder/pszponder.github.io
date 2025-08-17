// Copy Code Button Functionality
// Adds copy-to-clipboard buttons to code blocks

document.addEventListener('DOMContentLoaded', function() {
    // Find all code blocks (both pre and highlight)
    const codeBlocks = document.querySelectorAll('pre, .highlight > pre');
    
    codeBlocks.forEach(function(codeBlock) {
        // Skip if already processed
        if (codeBlock.classList.contains('copy-code-processed')) {
            return;
        }
        
        // Mark as processed
        codeBlock.classList.add('copy-code-processed');
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.type = 'button';
        copyButton.innerHTML = `
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        `;
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        copyButton.setAttribute('title', 'Copy code');
        
        // Create container for positioning
        const container = document.createElement('div');
        container.className = 'code-block-container';
        
        // Wrap the code block
        codeBlock.parentNode.insertBefore(container, codeBlock);
        container.appendChild(codeBlock);
        container.appendChild(copyButton);
        
        // Add click event
        copyButton.addEventListener('click', function() {
            // Get the code content
            const code = codeBlock.querySelector('code');
            const textToCopy = code ? code.textContent : codeBlock.textContent;
            
            // Copy to clipboard
            if (navigator.clipboard && window.isSecureContext) {
                // Use modern clipboard API
                navigator.clipboard.writeText(textToCopy).then(function() {
                    showCopySuccess(copyButton);
                }).catch(function(err) {
                    console.error('Failed to copy text: ', err);
                    fallbackCopyToClipboard(textToCopy, copyButton);
                });
            } else {
                // Fallback for older browsers
                fallbackCopyToClipboard(textToCopy, copyButton);
            }
        });
    });
});

// Show success animation
function showCopySuccess(button) {
    const copyIcon = button.querySelector('.copy-icon');
    const checkIcon = button.querySelector('.check-icon');
    
    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';
    button.classList.add('copied');
    
    setTimeout(function() {
        copyIcon.style.display = 'block';
        checkIcon.style.display = 'none';
        button.classList.remove('copied');
    }, 2000);
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(button);
    } catch (err) {
        console.error('Fallback: Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
}
