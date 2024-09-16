jQuery(document).ready(function($) {
    $('#responsive-css-editor-tabs').tabs();

    // Initialize CodeMirror for each textarea
    var desktopEditor = CodeMirror.fromTextArea(document.getElementById('desktop-css-code'), {
        lineNumbers: true,
        mode: "css",
        theme: "monokai"
    });

    var tabletEditor = CodeMirror.fromTextArea(document.getElementById('tablet-css-code'), {
        lineNumbers: true,
        mode: "css",
        theme: "monokai"
    });

    var mobileEditor = CodeMirror.fromTextArea(document.getElementById('mobile-css-code'), {
        lineNumbers: true,
        mode: "css",
        theme: "monokai"
    });

    // Save button functionality
    $('#save-css-button').click(function() {
        var desktopCSS = desktopEditor.getValue();
        var tabletCSS = tabletEditor.getValue();
        var mobileCSS = mobileEditor.getValue();

        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'save_responsive_css',
                desktop_css: desktopCSS,
                tablet_css: tabletCSS,
                mobile_css: mobileCSS,
            },
            success: function(response) {
                alert('CSS Saved!');
            },
            error: function(response) {
                alert('Error saving CSS.');
            }
        });
    });
});
