type GetOnPrefixProps<T> = {
  [K in keyof T & `on${string}`]: K;
};
type RemovePrefixOn<T> = T extends `on${infer R}` ? R : T;

declare namespace BMapGL {
  interface MapEventProps {
    /**
     * @description 当左键单击地图时触发此事件。当双击时，产生的事件序列为： click click dblclick
     */
    click: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void;

    /**
     * @description 鼠标双击地图时会触发此事件
     */
    dblclick: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 右键单击地图时触发此事件。当双击时，产生的事件序列为： rightclick rightclick rightdblclick
     */
    rightclick: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void;

    /**
     * @description 右键双击地图时触发此事件
     */
    rightdblclick: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void;

    /**
     * @description 地图类型发生变化时触发此事件
     */
    maptypechange: (event: { type: string; target: any }) => void;

    /**
     * @description 鼠标在地图区域移动过程中触发此事件
     */
    mousemove: (event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }) => void;

    /**
     * @description 鼠标移入地图区域时触发此事件
     */
    mouseover: (event: { type: string; target: any }) => void;

    /**
     * @description 鼠标移出地图区域时触发此事件
     */
    mouseout: (event: { type: string; target: any }) => void;

    /**
     * @description 地图移动开始时触发此事件
     */
    movestart: (event: { type: string; target: any }) => void;

    /**
     * @description 地图移动过程中触发此事件
     */
    moving: (event: { type: string; target: any }) => void;

    /**
     * @description 地图移动结束时触发此事件
     */
    moveend: (event: { type: string; target: any }) => void;

    /**
     * @description 地图更改缩放级别开始时触发此事件
     */
    zoomstart: (event: { type: string; target: any }) => void;

    /**
     * @description 地图更改缩放级别结束时触发此事件
     */
    zoomend: (event: { type: string; target: any }) => void;

    /**
     * @description 当使用Map.addOverlay()方法向地图中添加单个覆盖物时会触发此事件
     */
    addoverlay: (event: { type: string; target: any }) => void;

    /**
     * @description 当使用Map.addControl()方法向地图中添加单个控件时会触发此事件
     */
    addcontrol: (event: { type: string; target: any }) => void;

    /**
     * @description 当使用Map.removeControl()方法移除单个控件时会触发此事件
     */
    removecontrol: (event: { type: string; target: any }) => void;

    /**
     * @description 当使用Map.removeOverlay()方法移除单个覆盖物时会触发此事件
     */
    removeoverlay: (event: { type: string; target: any }) => void;

    /**
     * @description 当使用Map.clearOverlays()方法一次性移除全部覆盖物时会触发此事件
     */
    clearoverlays: (event: { type: string; target: any }) => void;

    /**
     * @description 开始拖拽地图时触发此事件
     */
    dragstart: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 拖拽地图过程中触发此事件
     */
    dragging: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 停止拖拽地图时触发此事件
     */
    dragend: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 当向地图中添加瓦片图层时会触发此事件
     */
    addtilelayer: (event: { type: string; target: any }) => void;

    /**
     * @description 当从地图中移除瓦片图层时会触发此事件
     */
    removetilelayer: (event: { type: string; target: any }) => void;

    /**
     * @description 地图完成加载后会触发此事件
     */
    load: (event: { type: string; target: any; point: Point; pixel: Pixel; zoom: number }) => void;

    /**
     * @description 地图可视区域大小发生变化时会触发此事件
     */
    resize: (event: { type: string; target: any; size: Size }) => void;

    /**
     * @description 当地图的瓦片全部加载完成时会触发此事件
     */
    tilesloaded: (event: { type: string; target: any }) => void;

    /**
     * @description 当开始触摸地图时会触发此事件
     */
    touchstart: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 在触摸地图过程中会触发此事件
     */
    touchmove: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 当停止触摸地图时会触发此事件
     */
    touchend: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;

    /**
     * @description 当地图被长按时会触发此事件
     */
    longpress: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
  }

  type MapEventNames = keyof MapEventProps;

  class Map {
    /**
     * 创建地图实例。
     * @param container - 地图容器的 ID 或 HTMLElement 对象。
     * @param opts - 可选的地图配置参数。
     */
    constructor(container: string | HTMLElement, opts?: MapOptions);

    /**
     * 设置显示选项
     * @param options - 显示选项参数
     */
    setDisplayOptions(options: MapOptions['displayOptions']): void;

    /**
     * 设置配置选项
     * @param options - 配置选项参数
     */
    setOptions(options: MapOptions): void;

    /**
     * 启用地图拖拽，默认启用。
     */
    enableDragging(): void;

    /**
     * 禁用地图拖拽。
     */
    disableDragging(): void;

    /**
     * 允许地图可被鼠标滚轮缩放，默认禁用。
     */
    enableScrollWheelZoom(): void;

    /**
     * 禁止地图被鼠标滚轮缩放。
     */
    disableScrollWheelZoom(): void;

    /**
     * 启用地图双击缩放，左键双击放大、右键双击缩小。
     */
    enableDoubleClickZoom(): void;

    /**
     * 取消地图双击缩放。
     */
    disableDoubleClickZoom(): void;

    /**
     * 启用键盘操作，默认禁用。
     */
    enableKeyboard(): void;

    /**
     * 禁用键盘操作。
     */
    disableKeyboard(): void;

    /**
     * 启用地图惯性拖拽，默认禁用。
     */
    enableInertialDragging(): void;

    /**
     * 禁用地图惯性拖拽。
     */
    disableInertialDragging(): void;

    /**
     * 开启双击平滑缩放效果。
     */
    enableContinuousZoom(): void;

    /**
     * 关闭双击平滑缩放效果。
     */
    disableContinuousZoom(): void;

    /**
     * 启用双指缩放地图。
     */
    enablePinchToZoom(): void;

    /**
     * 禁用双指缩放地图。
     */
    disablePinchToZoom(): void;

    /**
     * 启用自动适应容器尺寸变化，默认启用。
     */
    enableAutoResize(): void;

    /**
     * 禁用自动适应容器尺寸变化。
     */
    disableAutoResize(): void;

    /**
     * 设置地图默认的鼠标指针样式。
     * @param cursor - 鼠标指针样式。
     */
    setDefaultCursor(cursor: string): void;

    /**
     * 获取地图默认的鼠标指针样式。
     * @returns 当前地图默认的鼠标指针样式。
     */
    getDefaultCursor(): string;

    /**
     * 设置拖拽地图时的鼠标指针样式。
     * @param cursor - 鼠标指针样式。
     */
    setDraggingCursor(cursor: string): void;

    /**
     * 返回拖拽地图时的鼠标指针样式。
     * @returns 当前拖拽地图时的鼠标指针样式。
     */
    getDraggingCursor(): string;

    /**
     * 设置地图允许的最小缩放级别。
     * @param zoom - 最小缩放级别。
     */
    setMinZoom(zoom: number): void;

    /**
     * 设置地图允许的最大缩放级别。
     * @param zoom - 最大缩放级别。
     */
    setMaxZoom(zoom: number): void;

    /**
     * 设置地图的旋转角度。
     * @param heading - 旋转角度，取值范围：[0, 360]。
     */
    setHeading(heading: number): void;

    /**
     * 设置地图的倾斜角度。
     * @param tilt - 倾斜角度，取值范围：[0, 45]。
     */
    setTilt(tilt: number): void;

    /**
     * 设置地图样式。
     * @param mapStyle - 地图样式。
     */
    setMapStyle(mapStyle: MapStyle): void;

    /**
     * 设置个性化地图样式。
     * @param style - 个性化地图样式。
     */
    setMapStyleV2(style: MapStyleV2): void;

    /**
     * 设置地图的全景展示。
     * @param pano - 全景展示对象。
     */
    setPanorama(pano: Panorama): void;

    /**
     * 开启路况图层。
     */
    setTrafficOn(): void;

    /**
     * 关闭路况图层。
     */
    setTrafficOff(): void;

    /**
     * 禁用3D楼块效果。
     */
    disable3DBuilding(): void;

    /**
     * 获取当前地图视野范围的矩形区域。
     * @returns 地图的当前视野范围。
     */
    getBounds(): Bounds;

    /**
     * 获取地图的中心点坐标。
     * @returns 地图的中心点坐标。
     */
    getCenter(): Point;

    /**
     * 获取两个点之间的直线距离。
     * @param start - 起点坐标。
     * @param end - 终点坐标。
     * @returns 两点之间的距离（单位：米）。
     */
    getDistance(start: Point, end: Point): number;

    /**
     * 获取地图的当前地图类型。
     * @returns 当前地图类型。
     */
    getMapType(): MapType;

    /**
     * 获取地图的尺寸。
     * @returns 地图的尺寸。
     */
    getSize(): Size;

    /**
     * 获取地图当前视野范围的最佳地图视野。
     * @param view - 地理区域或坐标数组。
     * @param viewportOptions - 可选的视野调整参数。
     * @returns 最佳的地图视野。
     */
    getViewport(view: Point[] | Bounds, viewportOptions?: ViewportOptions): Viewport;

    /**
     * 获取当前地图的缩放级别。
     * @returns 当前的缩放级别。
     */
    getZoom(): number;

    /**
     * 获取当前地图的全景展示。
     * @returns 当前的全景展示对象。
     */
    getPanorama(): Panorama;

    /**
     * 设置地图的中心点和缩放级别。
     * @param center - 地图的中心点坐标或城市名称。
     * @param zoom - 缩放级别。
     */
    centerAndZoom(center: Point, zoom: number): void;

    /**
     * 设置地图的中心点和缩放级别，根据城市名称。
     * @param city - 城市名称。
     */
    centerAndZoom(city: string): void;

    /**
     * 将地图的中心点移动到指定的位置。
     * @param center - 地图的中心点坐标。
     * @param opts - 平移动画的配置参数。
     */
    panTo(center: Point, opts?: PanOptions): void;

    /**
     * 在地图上进行平移操作。
     * @param x - 水平方向上的平移距离。
     * @param y - 垂直方向上的平移距离。
     * @param opts - 平移动画的配置参数。
     */
    panBy(x: number, y: number, opts?: PanOptions): void;

    /**
     * 重置地图的中心点和缩放级别为初始化状态。
     */
    reset(): void;

    /**
     * 设置地图的中心点。
     * @param center - 地图的中心点坐标或城市名称。
     */
    setCenter(center: Point | string): void;

    /**
     * 设置当前地图显示的城市。
     * @param city - 城市名称。
     */
    setCurrentCity(city: string): void;

    /**
     * 设置地图的地图类型。
     * @param mapType - 地图类型。
     */
    setMapType(mapType: MapType): void;

    /**
     * 设置地图的视野范围。
     * @param view - 地理区域或坐标数组。
     * @param viewportOptions - 可选的视野调整参数。
     */
    setViewport(view: Point[] | Viewport, viewportOptions?: ViewportOptions): void;

    /**
     * 设置地图的缩放级别。
     * @param zoom - 缩放级别。
     */
    setZoom(zoom: number): void;

    /**
     * 判断地图是否开启了高分辨率地图。
     * @returns 若开启了高分辨率地图，则返回 `true`；否则返回 `false`。
     */
    highResolutionEnabled(): boolean;

    /**
     * 放大一级地图视图。
     */
    zoomIn(): void;

    /**
     * 缩小一级地图视图。
     */
    zoomOut(): void;

    /**
     * 添加热点对象到地图中。
     * @param hotspot - 热点对象。
     */
    addHotspot(hotspot: Hotspot): void;

    /**
     * 从地图中移除热点对象。
     * @param hotspot - 热点对象。
     */
    removeHotspot(hotspot: Hotspot): void;

    /**
     * 清除地图上的所有热点对象。
     */
    clearHotspots(): void;

    /**
     * 添加控件到地图上。
     * @param control - 控件对象。
     */
    addControl(control: Control): void;

    /**
     * 从地图中移除控件。
     * @param control - 控件对象。
     */
    removeControl(control: Control): void;

    /**
     * 获取地图容器的 HTMLElement 对象。
     * @returns 地图容器的 HTMLElement 对象。
     */
    getContainer(): HTMLElement;

    /**
     * 添加右键菜单。
     * @param menu - 右键菜单对象。
     */
    addContextMenu(menu: ContextMenu): void;

    /**
     * 移除右键菜单。
     * @param menu - 右键菜单对象。
     */
    removeContextMenu(menu: ContextMenu): void;

    /**
     * 添加覆盖物到地图中。
     * @param overlay - 覆盖物对象。
     */
    addOverlay(overlay: Overlay): void;

    /**
     * 从地图中移除覆盖物。
     * @param overlay - 覆盖物对象。
     */
    removeOverlay(overlay: Overlay): void;

    /**
     * 清除地图上的所有覆盖物。
     */
    clearOverlays(): void;

    /**
     * 在指定的位置打开信息窗口。
     * @param infoWnd - 信息窗口对象。
     * @param point - 打开信息窗口的位置坐标。
     */
    openInfoWindow(infoWnd: InfoWindow, point: Point): void;

    /**
     * 关闭信息窗口。
     */
    closeInfoWindow(): void;

    /**
     * 将地图上的像素坐标转换为地理坐标。
     * @param pixel - 像素坐标。
     * @returns 对应的地理坐标。
     */
    pixelToPoint(pixel: Pixel): Point;

    /**
     * 将地理坐标转换为地图上的像素坐标。
     * @param point - 地理坐标。
     * @returns 对应的像素坐标。
     */
    pointToPixel(point: Point): Pixel;

    /**
     * 获取当前打开的信息窗口实例。
     * @returns 当前打开的信息窗口实例，若不存在则返回 `null`。
     */
    getInfoWindow(): InfoWindow;

    /**
     * 获取地图上的所有覆盖物对象。
     * @returns 地图上的覆盖物对象数组。
     */
    getOverlays(): Overlay[];

    /**
     * 获取地图覆盖物容器列表。
     * @returns 地图覆盖物容器列表。
     */
    getPanes(): MapPanes;

    /**
     * 添加图层到地图上。
     * @param tileLayer - 图层对象。
     */
    addTileLayer(tileLayer: TileLayer): void;

    /**
     * 从地图中移除图层。
     * @param tileLayer - 图层对象。
     */
    removeTileLayer(tilelayer: TileLayer): void;

    /**
     * 获取指定类型的图层。
     * @param mapType - 地图类型。
     * @returns 对应类型的图层对象。
     */
    getTileLayer(mapType: string): TileLayer;

    /**
     * 将地图上的像素坐标转换为地理坐标。
     * @param pixel - 像素坐标。
     * @returns 对应的地理坐标。
     */
    pixelToPoint(pixel: Pixel): Point;

    /**
     * 将地理坐标转换为地图上的像素坐标。
     * @param point - 地理坐标。
     * @returns 对应的像素坐标。
     */
    pointToPixel(point: Point): Pixel;

    /**
     * 销毁地图实例。
     */
    destroy(): void;

    /**
     * 添加事件监听器。
     * @param event - 事件名称。
     * @param handler - 事件处理函数。
     */
    addEventListener<EventName extends MapEventNames>(event: EventName, handler: MapEventProps[EventName]): void;

    /**
     * 移除事件监听器。
     * @param event - 事件名称。
     * @param handler - 事件处理函数。
     */
    removeEventListener<EventName extends MapEventNames>(event: EventName, handler: MapEventProps[EventName]): void;

    /**
     * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
     * @param point - 地理坐标点
     * @returns 覆盖物容器的像素坐标
     */
    pointToOverlayPixel(point: Point): Pixel;

    /**
     * 根据覆盖物容器的坐标获取对应的地理坐标
     * @param pixel - 覆盖物容器的像素坐标
     * @returns 地理坐标点
     */
    overlayPixelToPoint(pixel: Pixel): Point;

    /**
     * 获取当前地图上的所有覆盖物，返回覆盖物对象的集合
     * @returns 当前地图上的所有覆盖物集合
     */
    getOverlays(): Array<Overlay>;

    /**
     * 返回地图覆盖物容器列表
     * @returns 地图覆盖物容器列表
     */
    getPanes(): MapPanes;

    /**
     * 获取当前地图允许的最大倾斜角度
     * @returns 当前地图允许的最大倾斜角度
     */
    getCurrentMaxTilt(): number;

    /**
     * 根据 uid 将底图上的 poi 高亮显示，其中参数tilePosStr为label的位置字符串
     * @param uid - poi的唯一标识
     * @param tilePosStr - label的位置字符串
     */
    hightlightSpotByUid(uid: string, tilePosStr: string): void;

    /**
     * 重置热区状态，即将高亮的热区点取消
     */
    resetSpotStatus(): void;

    /**
     * 重置热区状态，即将高亮的热区点取消
     */
    addAreaSpot(): void;

    /**
     * 返回地点区域数组
     * @param id - 区域的唯一标识
     * @returns 地点区域数组
     */
    getAreaSpot(id: string): Array;

    /**
     * 移除区域数组
     * @param id - 区域的唯一标识
     */
    removeAreaSpot(id: string): void;

    /**
     * 清除地点区域，此操作将清空所有虚拟可点数据
     */
    clearAreaSpots(): void;

    /**
     * 开启路况图层
     */
    setTrafficOn(): void;

    /**
     * 关闭路况图层
     */
    setTrafficOff(): void;

    /**
     * 显示覆盖物
     */
    showOverlayContainer(): void;

    /**
     * 不显示覆盖物
     */
    hideOverlayContainer(): void;

    /**
     * 设置个性化地图，参数为个性化配置对象
     * @param config - 个性化配置对象
     */
    setMapStyleV2(config: Object): void;

    /**
     * 启动视角动画
     * @param viewAnimation - 视角动画对象
     * @returns 动画的id，可用于取消动画
     */
    startViewAnimation(viewAnimation: ViewAnimation): Number;

    /**
     * 停止视角动画
     * @param viewAnimation - 视角动画对象
     */
    cancelViewAnimation(viewAnimation: ViewAnimation): void;

    /**
     * 获取地图截图，地球模式不支持。需要初始化地图配置preserveDrawingBuffer：true，否则是黑屏
     * @returns 地图截图的URL
     */
    getMapScreenshot(): url;

    /**
     * 加载地图当前样式所需要的样式文件，callback为加载成功后的回调函数
     * @param callback - 加载成功后的回调函数
     */
    loadMapStyleFiles(callback: Function): void;

    /**
     * 设置版权信息位置，其中logo为logo位置，copyright为文字位置
     * @param logo - logo位置对象
     * @param cpy - 文字位置对象
     */
    setCopyrightOffset(logo: Object, cpy: Object): void;

    /**
     * 销毁地图，当使用 WebGL 渲染地图时，如果确认不再使用该地图实例，则需要调用本方法销毁 WebGL 上下文，否则频繁创建新地图实例会导致浏览器报：too many WebGL context 的警告
     */
    destroy(): void;

    /**
     * 判断浏览器是否支持地球,支持返回true,否则返回false
     * @returns 若浏览器支持地球返回true,否则返回false
     */
    isSupportEarth(): boolean;
  }

  interface MapOptions {
    /** 地图允许展示的最小级别 */
    minZoom?: number | undefined;

    /** 地图允许展示的最大级别 */
    maxZoom?: number | undefined;

    /** 地图类型，默认为BMAP_NORMAL_MAP */
    mapType?: keyof MapType | undefined;

    /** 有关webgl layer的配置项, 可以控制底图更加细致的渲染 */
    displayOptions?: DisplayOptions;

    /** 是否允许拖拽，默认为true */
    enableDragging?: boolean;

    /** 是否允许选择，默认为true */
    enableRotate?: boolean;

    /** 是否允许倾斜，默认为true */
    enableTilt?: boolean;

    /** 是否允许键盘操作，默认为false */
    enableKeyboard?: boolean;

    /** 是否允许双击放大，默认为true */
    enableDblclickZoom?: boolean;

    /** 是否开启平滑缩放效果，默认为true */
    enableContinuousZoom?: boolean;

    /** 是否允许滚轮缩放，默认为false */
    enableWheelZoom?: boolean;

    /** 是否允许通过手势倾斜地图，默认为true */
    enableRotateGestures?: boolean;

    /** 是否开启自动适应地图容器变化，默认启用 */
    enableAutoResize?: boolean;

    /** 是否允许倾斜手势，默认为true */
    enableTiltGestures?: boolean;

    /** 是否允许捏合缩放，默认为true */
    enablePinchZoom?: boolean;

    /** 默认的动画持续时间，panBy的参数可以覆盖，默认为450 */
    actionDuration?: number;

    /** 鼠标指针悬浮在地图上的默认样式，默认为B.defaultCursor */
    defaultCursor?: string;

    /** 鼠标指针拖动地图的样式，默认为B.draggingCursor */
    draggingCursor?: string;

    /** 鼠标指针在overlay拖动时上的样式，默认为"pointer" */
    overlayMoveCursor?: string;

    /** 是否开启惯性拖拽，默认为true */
    enableInertialDragging?: boolean;

    /** resize时保证中心点不变, 一般禁用，默认为false */
    enableResizeOnCenter?: boolean;

    /** 强制地图的渲染方式，默认为空字符串 */
    forceRenderType?: 'dom' | 'canvas' | 'webgl' | '';

    /** 文本的渲染方式，默认为null */
    textRenderType?: 'canvas' | 'image' | null;

    /** 是否展示地图控件，默认为false */
    showControls?: boolean;

    /** 是否在地球模式下显示真实阳光，默认为true */
    showRealSunlight?: boolean;

    /** 是否在地球模式下显示银河，默认为true */
    showMilkyway?: boolean;

    /** 地球模式的背景，默认为null */
    earthBackground?: null;

    /** 是否显示街道底图, 启用时会hideVectorStreetLayer，默认为true */
    showStreetLayer?: boolean;

    /** 是否显示矢量街道图层，默认为false */
    showVectorStreetLayer?: boolean;
  }

  interface MapType {
    B_NORMAL_MAP: {
      tileUrls: string;
      vectorTileUrls: string;
      tileSize: 256;
      baseUnits: 256;
      zoomLevelMin: 3;
      zoomLevelMax: 19;
      minDataZoom: 3;
      maxDataZoom: 19;
      minZoom: 3;
      maxZoom: 19;
      webgl: {
        minZoom: 3;
        maxZoom: 25;
      };
      zoomLevelBase: 18;
      errorUrl: `${string}bg.png`;
      bounds: Bounds;
      imgExtend: 'png';
    };
    B_SATELLITE_MAP: {
      tileUrls: [
        '//maponline0.bdimg.com/starpic/?qt=satepc&',
        '//maponline1.bdimg.com/starpic/?qt=satepc&',
        '//maponline2.bdimg.com/starpic/?qt=satepc&',
        '//maponline3.bdimg.com/starpic/?qt=satepc&',
      ];
      tileSize: 256;
      baseUnits: 256;
      zoomLevelMin: 3;
      zoomLevelMax: 19;
      minDataZoom: 3;
      maxDataZoom: 19;
      minZoom: 3;
      maxZoom: 19;
      zoomLevelBase: 18;
      errorUrl: `${string}bg.png`;
      bounds: Bounds;
      imgExtend: 'png';
    };
    B_STREET_MAP: {
      tileUrls: string;
      tileSize: 256;
      baseUnits: 256;
      zoomLevelMin: 3;
      zoomLevelMax: 19;
      minDataZoom: 3;
      maxDataZoom: 19;
      minZoom: 3;
      maxZoom: 19;
      zoomLevelBase: 18;
      errorUrl: `${string}bg.png`;
      bounds: Bounds;
      imgExtend: 'png';
    };
    BMAP_CUSTOM_LAYER: {
      tileUrls: [''];
      tileSize: 256;
      baseUnits: 256;
      zoomLevelMin: 1;
      zoomLevelMax: 19;
      minDataZoom: 3;
      maxDataZoom: 19;
      minZoom: 3;
      maxZoom: 19;
      zoomLevelBase: 18;
      errorUrl: `${string}blank.gif`;
      bounds: Bounds;
      imgExtend: 'png';
    };
    B_EARTH_MAP: {
      tileUrls: [''];
      tileSize: 256;
      baseUnits: 256;
      zoomLevelMin: 3;
      zoomLevelMax: 19;
      minDataZoom: 3;
      maxDataZoom: 19;
      minZoom: 3;
      maxZoom: 19;
      webgl: {
        minZoom: 3;
        maxZoom: 21;
      };
      zoomLevelBase: 18;
      errorUrl: `${string}blank.gif`;
      bounds: Bounds;
      imgExtend: 'png';
    };
    B_NONE_MAP: {
      tileUrls: '';
      tileSize: 256;
      baseUnits: 256;
      zoomLevelMin: 3;
      zoomLevelMax: 19;
      minDataZoom: 3;
      maxDataZoom: 19;
      minZoom: 3;
      maxZoom: 19;
      zoomLevelBase: 18;
      errorUrl: `${string}bg.png`;
      bounds: Bounds;
      imgExtend: 'png';
    };
  }

  /**
   * 有关webgl layer的配置项, 可以控制底图更加细致的渲染
   */
  interface DisplayOptions {
    /**
     * 是否显示兴趣点
     *
     * @default true
     */
    poi?: boolean;
    /**
     * 是否显示兴趣点文本
     *
     * @default true
     */
    poiText?: boolean;
    /**
     * 是否显示兴趣点图标
     *
     * @default true
     */
    poiIcon?: boolean;
    /**
     * 是否显示覆盖物
     *
     * @default true
     */
    overlay?: boolean;
    /**
     * 是否显示图层
     *
     * @default true
     */
    layer?: boolean;
    /**
     * 是否显示建筑物
     *
     * @default true
     */
    building?: boolean;
    /**
     * 是否显示室内地图
     *
     * @default true
     */
    indoor?: boolean;
    /**
     * 是否显示街道
     *
     * @default true
     */
    street?: boolean;
    /**
     * 天空颜色
     *
     * @default ["rgba(226, 237, 248, 0)", "rgba(186, 211, 252, 1)"]
     */
    skyColors?: string[];
    /**
     * 是否使用平面地图
     *
     * @default false
     */
    isFlat?: boolean;
    /**
     * 标签边距
     *
     * @default 0
     */
    labelMargin?: number;
  }
}
