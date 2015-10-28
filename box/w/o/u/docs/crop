/**
 * Displays a given image in the callee canvas (or child canvas) element,
 * then overlays a crop guide and attempts to execute a callback with 
 * the image crop guide coordinates.
 * 
 * @public
 * @function cropGuide  
 *
 */
(function($) {
    $.fn.cropGuide = function(Options) {
    
        /**
         * Initialise defaults to missing Options.
         * 
         * @private
         * @property    Options
         * @type        Object
         */
        var Options = $.extend({
            width:                  null,
            height:                 null,
            ratio:                  1,
            onMouseUp:              null,
            minimumCropGuideWidth:  200,
            minimumCropGuideHeight: 200,
            returnDataUnits:        'pixels',
            cropPointRadius:        7
        }, Options);

        
        /**
         * Initialise some constants for use
         * throughout the plugin.
         * 
         * @private
         * @property    Constants       
         * @type        Object
         */
        var Constants = {
            MOUSE_STATE_UP:             'up',
            MOUSE_STATE_DOWN:           'down',
            CROP_POINT_TOP_LEFT:        'nwse',
            CROP_POINT_TOP_RIGHT:       'nesw',
            CROP_POINT_BOTTOM_LEFT:     'swne',
            CROP_POINT_BOTTOM_RIGHT:    'senw',
        };
        
    
        return $(this).each(function() {
            var that                        = $(this)
            ,   image                       = new Image()
            ,   imageLoaded                 = false
            ,   canvas                      = null
            ,   canvasWidth                 = null
            ,   canvasHeight                = null
            ,   context                     = null
            ,   mouseState                  = Constants.MOUSE_STATE_UP
            ,   objects                     = {}
            ,   cursorStyleMappings         = {}
            ,   selectedCropGuidePoint      = null
            ,   lastMouseUpCursorPosition   = null
            ,   selectedCropGuidePointTimer = null
            ,   activityIndicatorInterval   = null
            ,   activityIndicatorStart      = new Date();
            
            
            /**
             * Crop guide point objects, used to store info
             * about each crop guide point in the objects list.
             * 
             * @private
             * @method  CropGuidePoint
             * @void
             */
            var CropGuidePoint = function(name, x, y) {

                var radius = Options.cropPointRadius;

                // Accessors.
                this.getX       = function() { return x; };
                this.getY       = function() { return y; };
                this.getRadius  = function() { return radius; };
                this.getName    = function() { return name; };
                
                // Set the X or Y explicitly.
                this.setX   = function(newX)    { x = newX;     };
                this.setY   = function(newY)    { y = newY;     };

                // Move the X or Y a certain amount.
                this.moveX  = function(xAmount) { x    += xAmount;  };
                this.moveY  = function(yAmount) { y    += yAmount;  };
                
                // Draw this object to canvas.
                this.draw = function() {
                    context.beginPath();
                    context.arc(x, y, radius, 0, 2 * Math.PI);
                    
                    context.globalAlpha = 1;
                    context.fillStyle   = '#fff';
                    context.lineWidth   = 3;
                    context.strokeStyle = '#000';
                    
                    context.fill();
                    context.stroke();
                };
            };


            /**
             * Clears everything from the canvas, ready to redraw.
             * 
             * @private
             * @method  clearCanvas
             * @void
             */
            var clearCanvas = function() {
                context.clearRect(0, 0, canvas.width, canvas.height);
            };


            /**
             * Returns the cursor coordinates on the canvas
             * using a given event object.
             * 
             * @private
             * @method  getCursorCoordinates
             * @param   (Object)  e
             * @return  Object
             */
            var getCursorCoordinates = function(e) {
                var offset = canvas.offset();
                
                return {
                    x: e.pageX - offset.left,
                    y: e.pageY - offset.top
                };
            };


            /**
             * Test to see if the cursor has collided with any
             * of the crop points.
             * 
             * @private
             * @method  checkForCropPointCollision
             * @param   (Object)  e
             * @return  Boolean
             */
            var checkForCropPointCollision = function(e) {
                var collided            = false
                ,   cursorCoordinates   = getCursorCoordinates(e);
                
                for(var i in objects) {
                    if(Math.abs(objects[i].getX() - cursorCoordinates.x) < (objects[i].getRadius())) {
                        var dx      = cursorCoordinates.x - objects[i].getX()
                        ,   dy      = cursorCoordinates.y - objects[i].getY()
                        ,   angle   = Math.atan2(dy, dx)
                        ,   cx1     = objects[i].getRadius() * Math.cos(angle) + objects[i].getX()
                        ,   cy1     = objects[i].getRadius() * Math.sin(angle) + objects[i].getY()
                        ,   cx2     = cx1 - (objects[i].getRadius() * 2) * Math.cos(angle)
                        ,   cy2     = cy1 - (objects[i].getRadius() * 2) * Math.sin(angle);

                        var xHit    = false
                        ,   yHit    = false;

                        if(cx1 > cx2 && cursorCoordinates.x <= cx1 && cursorCoordinates.x >= cx2) {
                            xHit = true;
                        } else if(cursorCoordinates.x >= cx1 && cursorCoordinates.x <= cx2) {
                            xHit = true;
                        }
                        
                        if(cy1 > cy2 && cursorCoordinates.y <= cy1 && cursorCoordinates.y >= cy2) {
                                yHit = true;
                        } else if(cursorCoordinates.y >= cy1 && cursorCoordinates.y <= cy2) {
                            yHit = true;
                        }

                        if(xHit && yHit) {
                            clearTimeout(selectedCropGuidePointTimer);
                            
                            selectedCropGuidePoint  = objects[i].getName();
                            collided                = true;
                            break;
                        }
                    }
                }
                
                return collided;
            };
            
            
            /**
             * Checks to see if the cursor has entered the 
             * rop area (inside the crop guide).
             * 
             * @private
             * @method  checkForCropAreaCollision
             * @param   (Object)  e
             * @return  Boolean
             */
            var checkForCropAreaCollision = function(e) {
                var collided            = false
                ,   cursorCoordinates   = getCursorCoordinates(e);

                if(
                    cursorCoordinates.x > objects[Constants.CROP_POINT_TOP_LEFT].getX() && 
                    cursorCoordinates.x < objects[Constants.CROP_POINT_BOTTOM_RIGHT].getX() && 
                    cursorCoordinates.y > objects[Constants.CROP_POINT_TOP_LEFT].getY() && 
                    cursorCoordinates.y < objects[Constants.CROP_POINT_BOTTOM_RIGHT].getY())
                {
                    collided = true;
                }

                return collided;
            };


            /**
             * Returns the top, left, width, and height 
             * dimensions of the current crop guide area in pixels.
             * 
             * @private
             * @method  getCropAreaPixelDimensions
             * @return  Object
             */
            var getCropAreaPixelDimensions = function() {
                return {
                    x:      objects[Constants.CROP_POINT_TOP_LEFT].getX(),
                    y:      objects[Constants.CROP_POINT_TOP_LEFT].getY(),
                    width:  objects[Constants.CROP_POINT_TOP_RIGHT].getX() - objects[Constants.CROP_POINT_TOP_LEFT].getX(),
                    height: objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - objects[Constants.CROP_POINT_TOP_LEFT].getY()
                };
            };
            
            
            /**
             * Returns the top, left, width, and height 
             * dimensions of the current crop guide area in percent.
             * 
             * @private
             * @method  getCropAreaPercentDimensions
             * @return  Object
             */
            var getCropAreaPercentDimensions = function() {
                return {
                    x:      (objects[Constants.CROP_POINT_TOP_LEFT].getX() / context.canvas.width) * 100,
                    y:      (objects[Constants.CROP_POINT_TOP_LEFT].getY() / context.canvas.height) * 100,
                    width:  (objects[Constants.CROP_POINT_TOP_RIGHT].getX() - objects[Constants.CROP_POINT_TOP_LEFT].getX()) / context.canvas.width * 100,
                    height: (objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - objects[Constants.CROP_POINT_TOP_LEFT].getY()) / context.canvas.height * 100
                };
            };
            
            
            /**
             * Constrains given dimensions to the set ratio.
             * 
             * @private
             * @method  ratioConstrainDimensions
             * @param   (Object)    dimensions
             * @return  Object
             */
            var ratioConstrainDimensions = function(dimensions) {
                if(typeof dimensions.x !== 'undefined' && typeof dimensions.y !== 'undefined') {
                    if(dimensions.y < dimensions.x) {
                        dimensions.x = dimensions.y * Options.ratio;
                    } else {
                        dimensions.y = dimensions.x / Options.ratio;
                    }
                }
                
                return dimensions;
            };


            /**
             * Handles the user mousedown event, triggered on the 
             * canvas element.
             * 
             * @private
             * @method  handleMouseDownEvent
             * @param   (Object)  e
             * @void
             */
            var handleMouseDownEvent = function(e) {
                e.preventDefault();
                
                // Set mouse state.
                mouseState = Constants.MOUSE_STATE_DOWN;
                
                if(checkForCropPointCollision(e)) {
                    document.body.style.cursor  = cursorStyleMappings[selectedCropGuidePoint];
                }
                
                lastMouseUpCursorPosition = getCursorCoordinates(e);
            };
            
            
            /**
             * Handles the user mouseup event, triggered on the 
             * canvas element.
             * 
             * @private
             * @method  handleMouseUpEvent
             * @param   (Object)  e
             * @void
             */
            var handleMouseUpEvent = function(e) {
                e.preventDefault();
                
                // Set mouse state.
                mouseState                  = Constants.MOUSE_STATE_UP;
                document.body.style.cursor  = 'default';
                selectedCropGuidePoint      = null;
                lastMouseUpCursorPosition   = null;
                
                // Send out the dimensions via the callback onMouseUp.
                if(typeof Options.onMouseUp === 'function') {
                    switch(Options.returnDataUnits) {
                        case 'percent':
                            Options.onMouseUp(getCropAreaPercentDimensions());
                            break;

                        case 'pixels':
                        default:
                            Options.onMouseUp(getCropAreaPixelDimensions());
                            break;
                    }
                }
            };
            
            
            /**
             * Test to see if the resize that is about to 
             * happen will leave the canvas.
             * 
             * @private
             * @method  willGuideAreaBeInCanvas
             * @param   (Object)  distance
             * @return  Boolean
             */
            var willGuideAreaBeInCanvas = function(distance, move) {
                var willGuideAreaBeInCanvas = true
                ,   move                    = (typeof move === 'undefined') ? false : move
                ,   checkPoints             = [];
                
                if(move) {
                    for(var i in objects) {
                        checkPoints.push({
                            x: objects[i].getX() + distance.x,
                            y: objects[i].getY() + distance.y
                        });
                    }
                } else {
                    checkPoints = [
                        {
                            x: objects[Constants.CROP_POINT_TOP_LEFT].getX() + distance.x,
                            y: objects[Constants.CROP_POINT_TOP_LEFT].getY() + distance.y
                        },
                    
                        {
                            x: objects[Constants.CROP_POINT_TOP_RIGHT].getX() - distance.x,
                            y: objects[Constants.CROP_POINT_TOP_RIGHT].getY() + distance.y
                        },
                    
                        {
                            x: objects[Constants.CROP_POINT_BOTTOM_LEFT].getX() + distance.x,
                            y: objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - distance.y
                        },
    
                        {
                            x: objects[Constants.CROP_POINT_BOTTOM_RIGHT].getX() - distance.x,
                            y: objects[Constants.CROP_POINT_BOTTOM_RIGHT].getY() - distance.y
                        }
                    ];
                }

                // Test all the next check points are within the canvas bounds.
                for(var i = 0, len = checkPoints.length; i < len; i++) {
                    if(checkPoints[i].x < 0 || checkPoints[i].x >= context.canvas.width) {
                        willGuideAreaBeInCanvas = false;
                        break;
                    } else if(checkPoints[i].y < 0 || checkPoints[i].y >= context.canvas.height) {
                        willGuideAreaBeInCanvas = false;
                        break;
                    }
                }

                return willGuideAreaBeInCanvas;
            };
            
            
            /**
             * Test to see if the resize that is about to happen can
             * happen without breaking the minimum size or leaving the canvas.
             * 
             * @private
             * @method  canResizeCropGuideArea
             * @param   (Object)  distance
             * @return  Boolean
             */
            var canResizeCropGuideArea = function(distance) {
                var canResizeCropGuideArea  = false
                ,   cropArea                = getCropAreaPixelDimensions();
                
                // Check if the guide is already at the minimum size.
                if(typeof distance !== 'undefined' && distance.x && distance.y) {
                    if(distance.x <= 0 || (distance.x > 0 && cropArea.width > Options.minimumCropGuideWidth)) {
                        canResizeCropGuideArea = true;
                    }

                    if(distance.y <= 0 || (distance.y > 0 && cropArea.height > Options.minimumCropGuideHeight)) {
                        canResizeCropGuideArea = true;
                    }
                }
                
                // Check that the guide is within the canvas.
                if(!willGuideAreaBeInCanvas(distance)) {
                    canResizeCropGuideArea = false;
                }
                
                return canResizeCropGuideArea;
            };
            

            /**
             * Handles the user mousemove event, triggered on the 
             * canvas element.
             * 
             * @private
             * @method  handleMouseMoveEvent
             * @param   (Object)  e
             * @void
             */
            var handleMouseMoveEvent = function(e) {
                e.preventDefault();

                if(mouseState !== Constants.MOUSE_STATE_DOWN) {
                    document.body.style.cursor = 'default';
                }
                
                var insideCropArea = checkForCropAreaCollision(e);

                if(checkForCropPointCollision(e)) {
                    clearTimeout(selectedCropGuidePointTimer);
                    
                    lastMouseUpCursorPosition   = null;
                    document.body.style.cursor  = cursorStyleMappings[selectedCropGuidePoint];
                } else {
                    selectedCropGuidePointTimer = setTimeout(function() {
                        selectedCropGuidePoint = null;
                    }, 600);
                }
                
                if(insideCropArea && selectedCropGuidePoint === null) {
                    document.body.style.cursor = 'all-scroll';
                }
                
                // Only action mousemove events where the mouseState is MOUSE_STATE_DOWN.
                if(mouseState === Constants.MOUSE_STATE_DOWN) {
                    var cursorCoordinates   = getCursorCoordinates(e)
                    ,   distance            = null;

                    if(selectedCropGuidePoint !== null) {
                        switch(selectedCropGuidePoint) {
                        
                            case Constants.CROP_POINT_TOP_LEFT:

                                distance = ratioConstrainDimensions({
                                        x: cursorCoordinates.x - objects[selectedCropGuidePoint].getX(),
                                        y: cursorCoordinates.y - objects[selectedCropGuidePoint].getY()
                                });

                                break;
                                
                            case Constants.CROP_POINT_TOP_RIGHT:

                                distance = ratioConstrainDimensions({
                                    x: objects[selectedCropGuidePoint].getX() - cursorCoordinates.x,
                                    y: cursorCoordinates.y - objects[selectedCropGuidePoint].getY()
                                });

                                break;
    
                            case Constants.CROP_POINT_BOTTOM_RIGHT:

                                distance = ratioConstrainDimensions({
                                    x: objects[Constants.CROP_POINT_TOP_RIGHT].getX() - cursorCoordinates.x,
                                    y: objects[selectedCropGuidePoint].getY() - cursorCoordinates.y
                                });

                                break;
                                
                            case Constants.CROP_POINT_BOTTOM_LEFT:

                                distance = ratioConstrainDimensions({
                                    x: cursorCoordinates.x - objects[Constants.CROP_POINT_BOTTOM_LEFT].getX(),
                                    y: objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - cursorCoordinates.y
                                });

                                break;
                        }

                        if(distance !== null && canResizeCropGuideArea(distance)) 
                        {
                            objects[Constants.CROP_POINT_TOP_LEFT].moveX(distance.x);
                            objects[Constants.CROP_POINT_TOP_LEFT].moveY(distance.y);
                            objects[Constants.CROP_POINT_TOP_RIGHT].moveX(-distance.x);
                            objects[Constants.CROP_POINT_TOP_RIGHT].moveY(distance.y);
                            objects[Constants.CROP_POINT_BOTTOM_LEFT].moveX(distance.x);
                            objects[Constants.CROP_POINT_BOTTOM_LEFT].moveY(-distance.y);
                            objects[Constants.CROP_POINT_BOTTOM_RIGHT].moveX(-distance.x);
                            objects[Constants.CROP_POINT_BOTTOM_RIGHT].moveY(-distance.y);
                        }
                                
                    } else if(insideCropArea) {
                        if(lastMouseUpCursorPosition !== null) {
                            var distance = {
                                x:  cursorCoordinates.x - lastMouseUpCursorPosition.x,
                                y:  cursorCoordinates.y - lastMouseUpCursorPosition.y
                            };

                            if(willGuideAreaBeInCanvas(distance, true)) {
                                for(var i in objects) {
                                    objects[i].moveX(distance.x);
                                    objects[i].moveY(distance.y);
                                }
                            }
                        }
                        
                        lastMouseUpCursorPosition = cursorCoordinates;
                    }
                    
                    redrawObjects();
                }
            };


            /**
             * Binds all teh events that are needed on the canvas element.
             * 
             * @private
             * @method  bindCanvasEvents
             * @void
             */
            var bindCanvasEvents = function() {
                canvas.on('mousedown',  handleMouseDownEvent);
                canvas.on('mouseup',    handleMouseUpEvent);
                canvas.on('mouseleave', handleMouseUpEvent);
                canvas.on('mousemove',  handleMouseMoveEvent);
            };


            /**
             * Draws the rect overlay under the crop control points.
             * 
             * @private
             * @method  drawCropGuideRect
             * @param   (Integer)   x
             * @param   (Integer)   y
             * @param   (Integer)   w
             * @param   (Integer)   h
             * @void
             */
            var drawCropGuideRect = function(x, y, w, h) {
                context.lineWidth   = 3;
                context.strokeStyle = '#000';

                context.strokeRect(x, y, w, h);
                
                context.lineWidth   = 0;
                context.globalAlpha = 0.5;
                context.fillStyle   = "#000";
                
                // Craete the translucent background around the crop area with four rects (top, left, right, bottom).
                context.fillRect(0, 0, context.canvas.width, y);
                context.fillRect(0, y - 0.1, x, context.canvas.height + h);
                context.fillRect(x + w, y - 0.1, context.canvas.width - (x + w), context.canvas.height + h);
                context.fillRect(x, y + h, w, context.canvas.height - (y + h));
            };


            /**
             * Draws the original image to the canvas element.
             * 
             * @private
             * @method  doImageDraw
             * @param   (Function)  callback
             * @void
             */
            var doImageDraw = function(callback) {
                canvas.attr({ width: image.width, height: image.height });
                context.drawImage(image, 0, 0);
                
                if(typeof callback === 'function') {
                    callback();
                }
            }


            /**
             * Wrapper for doImageDraw, loads the original image
             * only if needed so we are not loading it up everytime
             * which delays the callback.
             * 
             * @private
             * @method  drawOriginalImage
             * @param   (Function)  callback
             * @void
             */
            var drawOriginalImage = function(callback) {
                clearCanvas();

                if(that.is('img') && !imageLoaded) {
                    imageLoaded     = true;
                    image.onload    = function() {
                        clearInterval(activityIndicatorInterval);
                        activityIndicatorInterval = null;
                        doImageDraw(callback);
                    };
                    
                    image.src = that.attr('src');
                } else {
                    doImageDraw(callback);
                }
            };

            
            /**
             * Overlays the crop guide to the original image.
             * 
             * @private
             * @method  drawCropGuide
             * @void    
             */
            var drawCropGuide = function() {
                var targetWidth     = context.canvas.width
                ,   targetHeight    = context.canvas.height;
                
                if(context.canvas.height < context.canvas.width) {
                    targetWidth = context.canvas.height * Options.ratio;
                } else {
                    targetHeight = context.canvas.width / Options.ratio;
                }
                
                // Make sure that the inital guide doesn't leave the canvas.
                if(targetWidth > context.canvas.width) {
                    targetWidth     = context.canvas.width;
                    targetHeight    = targetWidth / Options.ratio;
                }
                
                if(targetHeight > context.canvas.height) {
                    targetHeight    = context.canvas.height;
                    targetWidth     = targetHeight * Options.ratio;
                }

                var leftX   = (context.canvas.width - targetWidth) / 2
                ,   rightX  = targetWidth + (context.canvas.width - targetWidth) / 2
                ,   topY    = (context.canvas.height - targetHeight) / 2
                ,   bottomY = targetHeight + (context.canvas.height - targetHeight) / 2;

                var points = {};

                points[Constants.CROP_POINT_TOP_LEFT]       = { x: leftX,   y: topY     };
                points[Constants.CROP_POINT_TOP_RIGHT]      = { x: rightX,  y: topY     };
                points[Constants.CROP_POINT_BOTTOM_LEFT]    = { x: leftX,   y: bottomY  };
                points[Constants.CROP_POINT_BOTTOM_RIGHT]   = { x: rightX,  y: bottomY  };

                drawCropGuideRect(leftX, topY, targetWidth, targetHeight);

                for(var key in points) {
                    var cropGuidePoint = new CropGuidePoint(key, points[key].x, points[key].y);

                    cropGuidePoint.draw();

                    objects[cropGuidePoint.getName()] = cropGuidePoint;
                }
            };
            
            
            /**
             * Redraws all objects to the canvas.
             * 
             * @private
             * @method  redrawObjects
             * @void    
             */
            var redrawObjects = function() {
                drawOriginalImage(function() {
                    drawCropGuideRect(
                        objects[Constants.CROP_POINT_TOP_LEFT].getX(), 
                        objects[Constants.CROP_POINT_TOP_LEFT].getY(), 
                        objects[Constants.CROP_POINT_TOP_RIGHT].getX() - objects[Constants.CROP_POINT_TOP_LEFT].getX(), 
                        objects[Constants.CROP_POINT_BOTTOM_LEFT].getY() - objects[Constants.CROP_POINT_TOP_LEFT].getY()
                    );
                    
                    for(var i in objects) {
                        objects[i].draw();
                    }
                });
            };


            /**
             * Draws an activity indicator on the canvas.
             * 
             * @private
             * @method  drawActivityIndicator
             * @void
             */
            var drawActivityIndicator = function() {
                var lines       = 16
                ,   rotation    = parseInt(((new Date() - activityIndicatorStart) / 1000) * lines) / lines;
                
                context.save();
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                context.translate(context.canvas.width / 2, context.canvas.height / 2);
                context.rotate(Math.PI * 2 * rotation);
                
                for (var i = 0; i < lines; i++) {
                    context.beginPath();
                    context.rotate(Math.PI * 2 / lines);
                    context.moveTo(context.canvas.width / 40, 0);
                    context.lineTo(context.canvas.width / 15, 0);
                    
                    context.lineWidth   = context.canvas.width / 200;
                    context.strokeStyle = "rgba(0, 0, 0, " + i / lines + ")";
                    
                    context.stroke();
                }
                
                context.restore();
            };
            
            
            /**
             * Validates the Options, then draws the original
             * image and binds the canvas events.
             * 
             * @private
             * @method  init
             * @void
             */
            var init = function() {
                cursorStyleMappings[Constants.CROP_POINT_TOP_LEFT]      = 'nwse-resize';
                cursorStyleMappings[Constants.CROP_POINT_TOP_RIGHT]     = 'nesw-resize';
                cursorStyleMappings[Constants.CROP_POINT_BOTTOM_LEFT]   = 'nesw-resize';
                cursorStyleMappings[Constants.CROP_POINT_BOTTOM_RIGHT]  = 'nwse-resize';

                // Initialise the canvas and grab the context.
                canvas  = $('<canvas />');

                canvas.attr('width', (Options.width !== null) ? Options.width : that.attr('width'));
                canvas.attr('height', (Options.height !== null) ? Options.height : that.attr('height'));
                
                context = canvas[0].getContext('2d');
               
                that.after(canvas);
                that.remove();

                activityIndicatorInterval = setInterval(drawActivityIndicator, 1000 / 30);

                // Draw the original image, draw the crop guide, then bind events.
                drawOriginalImage(function() {
                    drawCropGuide();
                    bindCanvasEvents();
                });
            };
            
            
            // Plugin entry point.
            if(that.is('img')) {
                init();
            }
        });
    };
})(jQuery);

// Not part of the plugin, just an example usage.
$('img').cropGuide({
    ratio:              1,
    returnDataUnits:    'percent',
    onMouseUp:          function(cropDimensions) {
            $('#crop-info').val("x: " + cropDimensions.x + "\ny: " + cropDimensions.y + "\nw: " + cropDimensions.width + "\nh: " + cropDimensions.height);
    }
});