declare namespace Application {
    type ViewMode = 'default' | 'gyro' | 'vr' | 'ar' | 'stereo' | 'stereo_ar';
}
declare interface ActivitySharingOptions {
    readonly name: string;
    readonly description: string;
    readonly category: GalleryCategory;
}
declare class NumericProperty {
    set(value: number): void;
    get(): number;
    setInterpolationFunc(func: (((currentValue: number, targetValue: number) => number))): void;
    setBroadcastPeriod(broadcastPeriod: number): void;
}
declare namespace Application {
    type ScriptMode = 'play' | 'build' | 'activity';
}
declare namespace Battle {
    let isBattle: boolean;
    const firstPlayer: Battle.Player;
    const secondPlayer: Battle.Player;
    function randomInt(): number;
    function randomInt(lower: number, upper: number): number;
    function end(): void;
    function onStart(callback: ((() => void))): Disposable;
    function setDefaultAI(defaultAI: (((arg0: any) => void))): void;
}
declare namespace Battle {
    class Player {
        readonly name: string;
        readonly kind: 'first' | 'second';
        load(environment: any): void;
        score: number;
    }
}
declare namespace CoBlocks {
    interface __RuntimeListeners {
        readonly blockStarted?: (((fiberId: number, index: number) => void));
        readonly blockEnded?: (((fiberId: number, index: number) => void));
        readonly fiberStopped?: (((fiberId: number) => void));
        readonly fiberSuspended?: (((fiberId: number) => void));
    }
}
declare namespace CoBlocks {
    interface Async {
        [Symbol.iterator](): CoBlocks.Async;
        next(): IteratorResult<void>;
    }
}
declare namespace CoBlocks {
    interface Expression<T> {
        evaluate(): T;
    }
}
declare namespace CoBlocks {
    interface Statement {
        run(): CoBlocks.Async;
    }
}
declare namespace CoBlocks {
    interface __BlockProps {
        readonly id: string;
        readonly label: string | CoBlocks.__Label | Array<string | CoBlocks.__Label>;
        readonly searchLabels?: string | Array<string>;
        readonly category?: string;
        readonly color?: string;
    }
}
declare namespace CoBlocks {
    interface __EnumDescriptor {
        readonly items: CoBlocks.__EnumFieldProps;
        readonly searchable?: boolean;
    }
}
declare namespace CoBlocks {
    interface __EnumFieldProps {
        readonly [key: string]: string | CoBlocks.__Label;
        readonly [key: number]: string | CoBlocks.__Label;
    }
}
declare namespace CoBlocks {
    type __ExpressionDecorator = (((ts_constructor: ((new () => CoBlocks.Expression<any>))) => void));
}
declare namespace CoBlocks {
    interface __ExpressionBlockProps extends CoBlocks.__BlockProps {
        readonly type: string | Array<string>;
    }
}
declare namespace CoBlocks {
    interface __FieldProps extends CoBlocks.__ItemProps {
        readonly type: CoBlocks.__FieldType;
    }
}
declare namespace CoBlocks {
    type __FieldType = 'int' | 'number' | 'angle' | 'string' | 'boolean' | 'dx_base_item' | 'dx_game_item' | 'dx_group' | 'dx_text_item' | 'dx_text_item_interface' | 'dx_text_3d_item' | 'dx_physics_item' | 'sound' | 'image' | 'scene' | 'color';
}
declare namespace CoBlocks {
    class Icon {
    }
}
declare interface IconProps {
    readonly id: string;
    readonly size: Vector2;
}
declare namespace CoBlocks {
    interface __InputProps extends CoBlocks.__ItemProps {
        readonly type: CoBlocks.__InputType;
        readonly evaluated?: boolean;
    }
}
declare namespace CoBlocks {
    type __InputType = 'int' | 'number' | 'angle' | 'string' | 'boolean' | 'dx_base_item' | 'dx_game_item' | 'dx_group' | 'dx_text_item' | 'dx_text_item_interface' | 'dx_text_3d_item' | 'dx_physics_item' | 'sound' | 'image' | 'scene' | 'color' | 'vector3';
}
declare namespace CoBlocks {
    interface __ItemProps {
        readonly placeholder?: any;
        readonly min?: number;
        readonly max?: number;
    }
}
declare namespace CoBlocks {
    class __Label {
    }
}
declare namespace CoBlocks {
    type __PropertyDecorator = (((target: Object, key: string) => void));
}
declare namespace CoBlocks {
    type __StatementDecorator = (((ts_constructor: ((new () => CoBlocks.Statement))) => void));
}
declare class AnimationCategory {
    readonly name: string;
    readonly tracks: Array<string>;
}
declare namespace Camera {
    let focusedItem: CameraItem;
    const transform: ReadonlyTransform;
    function isVisible(item: BaseItem): boolean;
    /**
     *@deprecated
     */
    const direction: Vector3;
    function setCameraVerticalLimits(min: number, max: number): void;
    function setTargetDistanceLimits(min: number, max: number): void;
    /**
     *@deprecated
     */
    function setMovementRadius(radius: number): void;
    /**
     *@deprecated
     */
    let collision: boolean;
    let jumpVelocity: number;
    let gravity: number;
    let physicsCollision: boolean;
    function addToCollisionFilter(item: BaseItem): void;
    function removeFromCollisionFilter(item: BaseItem): void;
    let slopeAngle: number;
    let stayAngle: number;
    let collisionCapsuleHeight: number;
    let collisionCapsuleRadius: number;
    /**
     *@deprecated
     */
    let movementSpeed: number;
    let mouseLocked: boolean;
    /**
     *@deprecated
     */
    function enableAim(en: boolean): void;
    /**
     *@deprecated
     */
    function setAimColor(color: string): void;
    /**
     *@deprecated
     */
    let fieldOfView: number;
    /**
     *@deprecated
     */
    let orthographicSize: number;
    /**
     *@deprecated
     */
    let projection: Camera.Projection;
    function screenToWorld(screenPosition: Vector2, distance: number): Vector3;
    function worldToScreen(worldPosition: Vector3): Vector2;
    function takeSnapshot(resolution: Vector2, handler: (((arg0: string) => void))): void;
    let viewport: Rect;
    let pixelViewport: Rect;
    let dragSensitivity: number;
    let dragAxisXInverted: boolean;
    let dragAxisYInverted: boolean;
    let synchronized: boolean;
}
declare class ModelItemNode {
    readonly name: string;
    readonly children: Array<ModelItemNode>;
    localTransform: ReadonlyTransform;
    transform: ReadonlyTransform;
}
declare interface IVector3 {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}
declare namespace Multiplayer {
    class Player {
        readonly id: string;
        readonly userName: string;
        readonly latency: number;
        readonly jitter: number;
        readonly email: string;
        readonly index: number;
        readonly team: number;
        readonly isHost: boolean;
        sendMessage(message: string): void;
    }
}
declare class Constraint implements Disposable {
    tuneFrequencyDampingMass(f: number, d: number, m: number): void;
    /**
     *@deprecated
     */
    tuneFreqDumpMass(f: number, d: number, m: number): void;
    setMaxForce(f: number): void;
    dispose(): void;
}
declare class CurveConstraint extends Constraint {
    /**
     *@deprecated
     */
    setFriction(f: number): void;
    friction: number;
}
declare class DistanceConstraint extends Constraint {
    updateLocalPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    updateDistance(dist: number): void;
    getDistance(): number;
    readonly distance: number;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
declare class GearConstraint extends Constraint {
}
declare class HingeJointConstraint extends Constraint {
    getPosition(): Vector3;
    readonly position: Vector3;
    localAnchor1: Vector3;
    localAnchor2: Vector3;
    localAxis1: Vector3;
    localAxis2: Vector3;
    setLocalAnchor1(x: number, y: number, z: number): void;
    setLocalAnchor2(x: number, y: number, z: number): void;
    setLocalAxis1(x: number, y: number, z: number): void;
    setLocalAxis2(x: number, y: number, z: number): void;
    getAngle(): number;
    readonly angle: number;
    getLocalAnchor1(): Vector3;
    getLocalAnchor2(): Vector3;
    getLocalAxis1(): Vector3;
    getLocalAxis2(): Vector3;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
declare class JointConstraint extends Constraint {
    setClampingAngles(min: number, max: number): void;
    setAngularFriction(f: number): void;
    angularFriction: number;
    localAnchor1: Vector3;
    localAnchor2: Vector3;
    setLocalAnchor1(x: number, y: number, z: number): void;
    setLocalAnchor2(x: number, y: number, z: number): void;
    getLocalAnchor1(): Vector3;
    getLocalAnchor2(): Vector3;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
declare class MotorJointConstraint extends Constraint {
    localAnchor1: Vector3;
    localAnchor2: Vector3;
    localAxis1: Vector3;
    localAxis2: Vector3;
    getLocalAnchor1(): Vector3;
    getLocalAnchor2(): Vector3;
    getLocalAxis1(): Vector3;
    getLocalAxis2(): Vector3;
    setAngle(a: number): void;
    angle: number;
    getAngle(): number;
    rotateFromTo(fromAngle: number, toAngle: number, time: number, callback: ((() => void))): void;
    rotateLocal(angle: number, time: number, callback: ((() => void))): void;
    getPosition(): Vector3;
    readonly position: Vector3;
    readonly unit1: BaseItem;
    readonly unit2: BaseItem;
    getUnitId1(): string;
    readonly unitId1: string;
    getUnitId2(): string;
    readonly unitId2: string;
}
declare class PlaneConstraint extends Constraint {
}
declare class PositionConstraint extends Constraint {
    desiredPosition: Vector3;
    /**
     *@deprecated
     */
    updateDesiredPosition(x: number, y: number, z: number): void;
    readonly unit: BaseItem;
    /**
     *@deprecated
     */
    getUnitId(): string;
    /**
     *@deprecated
     */
    updateLocalPoint(x: number, y: number, z: number): void;
    localAnchor: Vector3;
}
declare class RotationAxisConstraint extends Constraint {
}
declare class RotationConstraint extends Constraint {
}
declare class SliderConstraint extends Constraint {
}
declare namespace AR {
    function getMarker(name: string): Marker;
    function isMarkerTracked(name: string): boolean;
    let sceneRotation: number;
    let sceneScale: number;
    let markerBased: boolean;
    let mode: 'none' | 'ground_plane' | 'multipeer' | 'merge_cube_surface' | 'merge_cube_item' | 'markers' | 'face_tracking' | 'body_tracking';
    const mergeCube: MergeCubeItem;
    const faceAnchor: AR.FaceAnchor;
    const bodyAnchor: AR.BodyAnchor;
    const participants: Array<AR.Anchor>;
    const planes: Array<AR.PlaneAnchor>;
    const peerCount: number;
    const trackedFaces: Array<AR.FaceAnchor>;
    function addDetectedObject(name: string, fileId: string): void;
    function addDetectedImage(name: string, fileId: string, physicalWidth: number): void;
    let faceTrackingEnabled: boolean;
    let collaborationEnabled: boolean;
}
declare namespace Activity {
    namespace BuildMode {
        function setInfoScenes(indexes: Array<number>): void;
        function resetCompletedScenes(): void;
    }
}
declare namespace Activity {
    class __PlayClickedEvent {
        deferPlayMode(): void;
        startPlayMode(): void;
        cancelPlayMode(): void;
    }
}
declare namespace Activity {
    /**
     *@deprecated
     */
    function showCodeEditor(show: boolean): void;
    /**
     *@deprecated
     */
    function showCodeEditorButton(show: boolean): void;
    /**
     *@deprecated
     */
    let codeEditorWidth: number;
    /**
     *@deprecated
     */
    function showCodeEditorWindowState(show: boolean): void;
    /**
     *@deprecated
     */
    function showCoBlocksEditor(show: boolean): void;
    /**
     *@deprecated
     */
    function setProgressBarVisible(value: boolean, onPhone: boolean): void;
    /**
     *@deprecated
     */
    function setProgressBarButtonURL(value: string): void;
    /**
     *@deprecated
     */
    function setProgressBarInteractive(value: boolean): void;
    /**
     *@deprecated
     */
    function showCoSpacesLogo(value: boolean): void;
    /**
     *@deprecated
     */
    function setInfoScenes(indexes: Array<number>): void;
    /**
     *@deprecated
     */
    function setMarkerBasedAR(value: boolean): void;
    /**
     *@deprecated
     */
    function setSceneCompleted(index: number): void;
    function completeScene(index: number): void;
    /**
     *@deprecated
     */
    function resetCompletedScenes(): void;
    function setTaskText(text: string): void;
    function setTaskImage(imageId: string): void;
    /**
     *@deprecated
     */
    function setToolbarColor(r: number, g: number, b: number, a: number): void;
    /**
     *@deprecated
     */
    function addFunction(name: string, func: Function): void;
    /**
     *@deprecated
     */
    function getFunction(name: string): Function;
    /**
     *@deprecated
     */
    function getFunctions(name: string): Array<Function>;
    /**
     *@deprecated
     */
    function sendTiming(category: string, value: string, label: string, time: number): void;
    /**
     *@deprecated
     */
    function actionPerformed(category: string, action: string, label: string): void;
    /**
     *@deprecated
     */
    function actionPerformed(category: string, action: string, label: string, value: number): void;
    /**
     *@deprecated
     */
    function propertySet(name: string, value: string): void;
    /**
     *@deprecated
     */
    function log(message: any): void;
    function onPlayClicked(handler: (((arg0: Activity.__PlayClickedEvent) => void))): Disposable;
    function onPlayModeStarted(initFunction: ((() => void))): Disposable;
    let speedMultiplier: number;
    function exportActivity(): void;
    function acceptActivity(): void;
}
declare namespace Activity {
    namespace Sharing {
        function publish(options: ActivitySharingOptions): Promise<string>;
        function wasPublished(): Promise<string>;
        function unlist(): void;
        function openShareLink(): void;
        const shared: boolean;
        function openSharePage(): void;
        function isGallery(): boolean;
    }
}
declare namespace Analytics {
    function sendTiming(options: Analytics.TimingOptions): void;
    function actionPerformed(options: Analytics.ActionOptions): void;
    function propertySet(name: string, value: string): void;
}
declare namespace Application {
    let isMuted: boolean;
    function onModeChanged(handler: (((arg0: Application.ViewMode) => void))): Disposable;
    function startPlayMode(): void;
    function quit(): void;
    function quit(imageId: string): void;
    /**
     *@deprecated
     */
    function finishPlayMode(): void;
    /**
     *@deprecated
     */
    function finishPlayMode(imageId: string): void;
    function resetScene(): void;
    function restartScene(): void;
    let viewMode: Application.ViewMode;
    const scriptMode: Application.ScriptMode;
    const isMobile: boolean;
    const isTablet: boolean;
    const isWeb: boolean;
    function isViewModeSupported(mode: Application.ViewMode): boolean;
    const locale: string;
    function onSceneExit(onExit: ((() => void))): Disposable;
    function onSceneSwitch(handler: (((arg0: number) => void))): Disposable;
    function onStart(handler: ((() => void))): Disposable;
    let itemEditMode: Application.ItemEditMode;
}
declare namespace Assistant {
    function listen(provider: string, onUtterance: (((data: Object) => void))): Disposable;
    function listen(onUtterance: (((data: Object) => void))): Disposable;
}
declare namespace CoBlocks {
    function suspend(handler: CoBlocks.__SuspendAction): CoBlocks.Async;
    function delay(seconds: number): CoBlocks.Async;
    function delayPhysics(seconds: number): CoBlocks.Async;
    function terminate(): CoBlocks.Async;
    function parallel(actions: Array<((() => CoBlocks.Async))>): CoBlocks.Async;
    function fork(action: ((() => CoBlocks.Async))): void;
    function createModel(): CoBlocks.Model.Script;
    function addCategory(props: {
        readonly id: string;
        readonly title?: string;
        readonly color?: string;
        readonly icon?: string;
    }): CoBlocks.ToolboxCategory;
    function removeCategory(category: CoBlocks.ToolboxCategory): void;
    function removeAllCategories(): void;
    function hideAllBlocks(): void;
    function setBlockVisible(blockId: string, visible: boolean): void;
    function getCategory(id: string): CoBlocks.ToolboxCategory;
    function getRootCategory(): CoBlocks.ToolboxCategory;
    function statementInput(): CoBlocks.__PropertyDecorator;
    function input(props: CoBlocks.__InputProps): CoBlocks.__PropertyDecorator;
    function fieldInput(props: CoBlocks.__FieldProps): CoBlocks.__PropertyDecorator;
    function variableField(): CoBlocks.__PropertyDecorator;
    function enumField(props: CoBlocks.__EnumFieldProps): CoBlocks.__PropertyDecorator;
    function enumField(props: CoBlocks.__EnumDescriptor): CoBlocks.__PropertyDecorator;
    function statement(props: CoBlocks.__BlockProps): CoBlocks.__StatementDecorator;
    function expression(props: CoBlocks.__ExpressionBlockProps): CoBlocks.__ExpressionDecorator;
    function label(template: TemplateStringsArray, ...placeholders: CoBlocks.Icon[]): CoBlocks.__Label;
    function icon(props: IconProps): CoBlocks.Icon;
    function createFunction(name: string, parameters: Array<CoBlocks.Model.ParameterDefinition>): CoBlocks.Model.FunctionDefinition;
    function createParameter(name: string, kind: CoBlocks.Model.TypeKind): CoBlocks.Model.ParameterDefinition;
    namespace workspace {
        function afterEvents(runnable: ((() => void))): void;
        const script: CoBlocks.Model.Script;
        function saveToString(): string;
        function loadFromString(value: string): void;
        function onBlockAdded(listener: (((block: CoBlocks.Model.Block) => void))): Disposable;
        function onBlockRemoved(listener: (((block: CoBlocks.Model.Block) => void))): Disposable;
        function onFieldChanged(listener: (((field: CoBlocks.Model.FieldInput, oldValue: string) => void))): Disposable;
        function createBlock(id: string): CoBlocks.Model.Block;
        function createFunctionCall(name: string): CoBlocks.Model.FunctionCallBlock;
        function filterActions(actionFilters: CoBlocks.Model.ActionFilters): Disposable;
        const debug: CoBlocks.__Debugger;
    }
    namespace toolbox {
        const root: CoBlocks.ToolboxCategory;
        const blocks: CoBlocks.ToolboxBlockCollection;
        let searchVisible: boolean;
        let categoryIconsVisible: boolean;
    }
    namespace runtime {
        function listen(listeners: CoBlocks.__RuntimeListeners): Disposable;
    }
}
declare namespace CoBlocks {
    class ToolboxBlock {
        visible: boolean;
        highlighted: boolean;
    }
}
declare namespace CoBlocks {
    class ToolboxBlockCollection {
        [Symbol.iterator](): Iterator<CoBlocks.ToolboxBlock>;
        hideAll(): void;
        showAll(): void;
        clearHighlights(): void;
        readonly byId: {
            readonly [key: string]: CoBlocks.ToolboxBlock;
        };
    }
}
declare namespace CoBlocks {
    class __Debugger {
        enabled: boolean;
        visible: boolean;
        width: number;
        activeTab: GUI.ScriptTab;
        getTab(index: number): GUI.ScriptTab;
        getTab(name: string): GUI.ScriptTab;
    }
}
declare namespace Debug {
    function log(s: any): void;
}
declare class Direction {
    static readonly left: Vector3;
    static readonly right: Vector3;
    static readonly up: Vector3;
    static readonly down: Vector3;
    static readonly forward: Vector3;
    static readonly back: Vector3;
}
declare namespace ML {
    function createLearningEnvironment(options: ML.Options): void;
}
declare namespace Multiplayer {
    namespace BuildMode {
        let minPlayers: number;
        let maxPlayers: number;
        let joinInProgressAllowed: boolean;
        let hostChangeInProgressAllowed: boolean;
        let numberOfTeams: number;
    }
}
declare namespace Multiplayer {
    function setGameSessionProp(key: string, value: any): void;
    function getGameSessionProp(key: string): string;
    function getNumericProperty(key: string): NumericProperty;
    const me: Multiplayer.Player;
    const host: Multiplayer.Player;
    function getPlayer(id: string): Multiplayer.Player;
    const players: Array<Multiplayer.Player>;
    const playersOnCurrentScene: Array<Multiplayer.Player>;
    function getPlayersOnScene(sceneIndex: number): Array<Multiplayer.Player>;
    let warningsEnabled: boolean;
    function onHostStart(func: ((() => void))): void;
    function onRebalance(callback: ((() => void))): void;
    function onChatMessageReceived(callback: (((player: Multiplayer.Player, message: string) => void))): void;
    function onConnect(callback: (((arg0: Multiplayer.Player) => void))): void;
    function onDisconnect(callback: (((arg0: Multiplayer.Player) => void))): void;
    function onMessageReceived(callback: (((player: Multiplayer.Player, message: string) => void))): void;
    function onPlayersLoaded(callback: ((() => void))): void;
    function onPlayerSceneEnter(callback: (((arg0: Multiplayer.Player) => void)), sceneIndex: number): void;
    function onPlayerSceneExit(callback: (((arg0: Multiplayer.Player) => void)), sceneIndex: number): void;
    function onItemCreated(callback: (((arg0: string) => void))): void;
    function startLocalWebRTCDemo(): void;
}
declare namespace Physics {
    namespace Constraints {
        function createMotorJoint(first: BaseItem, second: BaseItem, v: BaseItem): MotorJointConstraint;
        function createHingeJoint(first: BaseItem, second: BaseItem, v: BaseItem): HingeJointConstraint;
    }
}
declare namespace Physics {
    /**
     *@deprecated
     */
    function createMotorJoint(first: BaseItem, second: BaseItem, v: BaseItem): MotorJointConstraint;
    /**
     *@deprecated
     */
    function createHingeJoint(first: BaseItem, second: BaseItem, v: BaseItem): HingeJointConstraint;
    function addSceneItems(): void;
    function removeSceneItems(): void;
    function createExplosion(origin: Vector3, radius: number, power: number): void;
    let deltaTime: number;
    let gravityAcceleration: number;
    /**
     *@deprecated
     */
    let gravityPull: number;
    let gravityDirection: Vector3;
    let floorHeight: number;
    let realTime: boolean;
    let paused: boolean;
    let rotationFriction: boolean;
    let sceneRadius: number;
    let solverRelaxationFactor: number;
    let physicsSpeed: number;
    let airArchimedesPrinciple: boolean;
    function getTickRate(): number;
    function setTickRate(tick: number): void;
}
declare namespace Renderer {
    namespace PostProcessing {
        let highlightGlowInnerColor: Color;
        let highlightGlowOuterColor: Color;
        let highlightGlowIntensity: number;
        let highlightGlowWidth: number;
        let bloom: boolean;
        let bloomIntensity: number;
    }
}
declare namespace RayCast {
    function cast(origin: Vector3, direction: Vector3): RayCast.Result;
    function addToFilter(item: BaseItem): void;
    function removeFromFilter(item: BaseItem): void;
    function shapeCast(item1: BaseItem, direction1: Vector3, item2: BaseItem, direction2: Vector3): number;
}
declare namespace Renderer {
    let fadeObjectToCamera: boolean;
    let itemPivotsVisible: boolean;
    let boundsVisible: boolean;
    let collisionVolumesVisible: boolean;
    let renderCollisionPoints: boolean;
    let renderJoints: boolean;
    let renderLightItems: boolean;
    let renderLineLabels: boolean;
    let renderShadows: boolean;
    let slot: string;
    let renderSoftParticles: boolean;
    let renderBoundingBoxesExt: boolean;
}
declare namespace Scene {
    function getItem(id: string): BaseItem;
    function getItemSafe(id: string, name: string, errorMessage: string): BaseItem;
    function getItemSafeByName(name: string, errorMessage: string): BaseItem;
    function createDebugCube(errorMessage: string, name: string, posX: number, posY: number, posZ: number): Cuboid;
    /**
     *@deprecated
     */
    function getSelected(): BaseItem;
    let selectedItem: BaseItem;
    function getItems(): Array<BaseItem>;
    const items: ObservableList<BaseItem>;
    const selectedItems: ReadonlyList<BaseItem>;
    function getItemsWithTag(tag: string): Array<BaseItem>;
    function createItem(modelId: string, posX: number, posY: number, posZ: number): BaseItem;
    function createItem(modelId: string, pos: Vector3): BaseItem;
    function createItem(modelId: string, pos: Vector3, slot: string): BaseItem;
    function createItem(modelId: string, posX: number, posY: number, posZ: number, slot: string): BaseItem;
    function createSynchronizedItem(modelId: string, posX: number, posY: number, posZ: number, slot: string): BaseItem;
    function createCuboid(posX: number, posY: number, posZ: number): Cuboid;
    function createCuboid(pos: Vector3): Cuboid;
    function createEllipsoid(posX: number, posY: number, posZ: number): Ellipsoid;
    function createEllipsoid(pos: Vector3): Ellipsoid;
    function createCapsule(posX: number, posY: number, posZ: number): Capsule;
    function createCapsule(pos: Vector3): Capsule;
    function createHemiellipsoid(posX: number, posY: number, posZ: number): HemiEllipsoid;
    function createHemiellipsoid(pos: Vector3): HemiEllipsoid;
    function createTorus(posX: number, posY: number, posZ: number): Torus;
    function createTorus(pos: Vector3): Torus;
    function createSemiTorus(posX: number, posY: number, posZ: number): AnisotropicItem;
    function createSemiTorus(pos: Vector3): AnisotropicItem;
    function createParticleSystem(posX: number, posY: number, posZ: number, data: string): ParticleItem;
    function createGroup(): Group;
    function createCustomItem(): CustomItem;
    function createChart(posX: number, posY: number, posZ: number, ax: number, ay: number, bx: number, by: number): ChartItem;
    function createEllipsePath(x: number, y: number, z: number, r0: number, r1: number, n: number): PathItem;
    function createSplineFromArray(x: Array<number>, y: Array<number>, z: Array<number>, ts_type: 'POLYLINE' | 'SPLINE'): PathItem;
    function createFunction3D(ts_function: (((t: number) => {
        readonly x: number;
        readonly y: number;
        readonly z: number;
    })), t0: number, t1: number, div: number, ts_type: 'POLYLINE' | 'SPLINE'): PathItem;
    function createPathItem(): PathItem;
    function createPathFromSerializedPQS(s: string): PathItem;
    function createFlatLineItem(): FlatLineItem;
    function createFunction3D(ts_function: (((t: number) => {
        readonly x: number;
        readonly y: number;
        readonly z: number;
    })), t0: number, t1: number, div: number): PathItem;
    function createLakeItem(): LakeItem;
    function createExtrudeItem(): ExtrudeItem;
    function createExtrudeItem(w: number, h: number, l: number): ExtrudeItem;
    function createExtrudeItem(ax: number, ay: number, bx: number, by: number, h: number): ExtrudeItem;
    function createText3DItem(): Text3DItem;
    function createRoadItem(): RoadItem;
    function createVector(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): ServiceItem;
    function createPoint(pos: Vector3): ServiceItem;
    function createBasis(pos: Vector3): VectorItem;
    function createBasis(posX: number, posY: number, posZ: number): VectorItem;
    function createBasis(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): ServiceItem;
    function createMengerSponge4Item(pos: Vector3): MengerSponge4Item;
    /**
     *@deprecated
     */
    function createMengerSponge4Item(posX: number, posY: number, posZ: number): MengerSponge4Item;
    function createFractalItem(posX: number, posY: number, posZ: number): FractalItem;
    function createFoliageItem(): FoliageItem;
    function createImageItem(imageId: string, posX: number, posY: number, posZ: number): ImageItem;
    function createImageItem(imageId: string, pos: Vector3): ImageItem;
    function createTextBillboard(posX: number, posY: number, posZ: number): Cuboid;
    function createTextBillboard(pos: Vector3): Cuboid;
    function createVideoItem(imageId: string, posX: number, posY: number, posZ: number): VideoItem;
    function createVideoItem(imageId: string, pos: Vector3): VideoItem;
    /**
     *@deprecated
     */
    function createText(posX: number, posY: number, posZ: number, text: string): TextItem;
    function createText(pos: Vector3, text: string): TextItem;
    function createPathTail(): PathTail;
    function removeAllPathTails(): void;
    function addDashedCircle(basisId: string, red: number, green: number, blue: number, alpha: number, n: number, p: number, rx: number, ry: number): boolean;
    function removeAllDashedCircles(): void;
    /**
     *@deprecated
     */
    function getDefaultTailThickness(): number;
    const defaultTailThickness: number;
    function createCirclePath(x: number, y: number, z: number, r: number): PathItem;
    function createCirclePath(x: number, y: number, z: number, r: number, n: number): PathItem;
    function createRoundedRectPath(w: number, h: number, r: number): PathItem;
    function createSpiralSpline(x: number, y: number, z: number, r: number, alpha: number, dr: number, div: number, n: number): PathItem;
    /**
     *@deprecated
     */
    function copyItem(item: BaseItem): BaseItem;
    /**
     *@deprecated
     */
    function setMinPlayers(amount: number): void;
    /**
     *@deprecated
     */
    function setMaxPlayers(amount: number): void;
    /**
     *@deprecated
     */
    function enableJoinInProgress(): void;
    /**
     *@deprecated
     */
    function enableHostChangeInProgress(): void;
    /**
     *@deprecated
     */
    function printChatLine(line: string): void;
    /**
     *@deprecated
     */
    function setNumberOfTeams(numberOfTeams: number): void;
    /**
     *@deprecated
     */
    function setAllowedTeamDisbalance(allowedDisbalance: number): void;
    /**
     *@deprecated
     */
    function setGameSessionProp(key: string, value: any): void;
    /**
     *@deprecated
     */
    function getGameSessionProp(key: string): string;
    /**
     *@deprecated
     */
    function setAccountProperty(value: string): void;
    /**
     *@deprecated
     */
    function getAccountProperty(): string;
    /**
     *@deprecated
     */
    function getPlayerId(): string;
    /**
     *@deprecated
     */
    function getPlayerIndex(): number;
    /**
     *@deprecated
     */
    function getPlayerTeam(): number;
    /**
     *@deprecated
     */
    function getLatency(playerId: string): number;
    /**
     *@deprecated
     */
    function getJitter(playerId: string): number;
    /**
     *@deprecated
     */
    function getPlayersOnCurrentScene(): Array<string>;
    /**
     *@deprecated
     */
    function getPlayersOnScene(sceneIndex: number): Array<string>;
    /**
     *@deprecated
     */
    function onPlayerSceneEnter(callback: (((arg0: string) => void)), sceneIndex: number): void;
    /**
     *@deprecated
     */
    function onPlayerSceneExit(callback: (((arg0: string) => void)), sceneIndex: number): void;
    /**
     *@deprecated
     */
    function onHostStart(func: ((() => void))): void;
    /**
     *@deprecated
     */
    function onRebalance(callback: ((() => void))): void;
    /**
     *@deprecated
     */
    function onClientReceived(func: (((id: string, message: string) => void))): void;
    /**
     *@deprecated
     */
    function onHostReceived(func: (((id: string, message: string) => void))): void;
    /**
     *@deprecated
     */
    function sendToClient(client: string, message: string): void;
    /**
     *@deprecated
     */
    function sendToHost(message: string): void;
    /**
     *@deprecated
     */
    function isHost(): boolean;
    /**
     *@deprecated
     */
    function setMultiplayerWarningsEnabled(enabled: boolean): void;
    /**
     *@deprecated
     */
    function onPlayersLoaded(callback: ((() => void))): void;
    /**
     *@deprecated
     */
    function setPhysicsSolverRelaxationFactor(relaxationFactor: number): void;
    /**
     *@deprecated
     */
    function explosion(x: number, y: number, z: number, radius: number, power: number): void;
    /**
     *@deprecated
     */
    function pausePhysics(b: boolean): void;
    /**
     *@deprecated
     */
    function setPhysicsDT(dt: number): void;
    /**
     *@deprecated
     */
    function setPhysicsRealTime(b: boolean): void;
    /**
     *@deprecated
     */
    function setPhysicsSpeedFactor(s: number): void;
    /**
     *@deprecated
     */
    function setPhysicsRotationFriction(enabled: boolean): void;
    /**
     *@deprecated
     */
    function setPhysicsGravity(g: number): void;
    /**
     *@deprecated
     */
    function setGravityVector(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    function setPhysicsSceneRadius(r: number): void;
    /**
     *@deprecated
     */
    function setPhysicsFloorZ(z: number): void;
    /**
     *@deprecated
     */
    function setAirArchimedesPrinciple(enabled: boolean): void;
    /**
     *@deprecated
     */
    function addItemsToPhysics(): void;
    /**
     *@deprecated
     */
    function removeItemsFromPhysics(): void;
    function setProperty(key: string, value: any): void;
    function getProperty(key: string): string;
    function onPropertyChanged(id: string, handler: (((arg0: string) => void))): void;
    const globalProperties: {
        [key: string]: string;
    };
    const model: Model;
    function startTransaction(): void;
    function commitTransaction(): void;
    /**
     *@deprecated
     */
    /**
     *@deprecated
     */
    function schedule(func: ((() => void)), delay: number): Disposable;
    /**
     *@deprecated
     */
    function scheduleRepeating(func: ((() => void)), period: number): Disposable;
    /**
     *@deprecated
     */
    function schedulePhysics(func: ((() => void)), delay: number): Disposable;
    /**
     *@deprecated
     */
    function scheduleRepeatingPhysics(func: (((deltaTime: number) => void)), period: number): Disposable;
    /**
     *@deprecated
     */
    function currentTime(): number;
    /**
     *@deprecated
     */
    function currentPhysicsTime(): number;
    /**
     *@deprecated
     */
    function setEnvironmentDataString(env: string): void;
    /**
     *@deprecated
     */
    let environmentDataString: string;
    /**
     *@deprecated
     */
    function getEnvironmentDataString(): string;
    /**
     *@deprecated
     */
    function requestPlayerControl(enabled: boolean): void;
    /**
     *@deprecated
     */
    function onButtonDown(handler: ((() => void))): void;
    /**
     *@deprecated
     */
    function onButtonDown(handler: ((() => void)), buttonString: string): void;
    /**
     *@deprecated
     */
    function onButtonUp(handler: ((() => void))): void;
    /**
     *@deprecated
     */
    function onButtonUp(handler: ((() => void)), buttonString: string): void;
    /**
     *@deprecated
     */
    function onButtonPressed(handler: ((() => void))): void;
    /**
     *@deprecated
     */
    function onButtonPressed(handler: ((() => void)), buttonString: string): void;
    /**
     *@deprecated
     */
    function consumeCustomInputEvents(consume: boolean): void;
    /**
     *@deprecated
     */
    function renderSoftParticles(enabled: boolean): void;
    /**
     *@deprecated
     */
    function renderBloom(enabled: boolean): void;
    /**
     *@deprecated
     */
    function setBloomIntensity(intensity: number): void;
    /**
     *@deprecated
     */
    function renderCollisionPoints(b: boolean): void;
    /**
     *@deprecated
     */
    function renderJoints(b: boolean): void;
    /**
     *@deprecated
     */
    function renderLightItems(b: boolean): void;
    /**
     *@deprecated
     */
    function renderCollisionCapsules(b: boolean): void;
    /**
     *@deprecated
     */
    function onExternalCommand(callback: (((command: any, source: Window) => void))): void;
    /**
     *@deprecated
     */
    function getController(index: number): Controller;
    /**
     *@deprecated
     */
    function onSensorRotation(handler: (((arg0: PositionService) => void))): void;
    /**
     *@deprecated
     */
    function loadSound(s: string): Sound;
    /**
     *@deprecated
     */
    function loadSound(s: string, callback: (((arg0: Sound) => void))): void;
    /**
     *@deprecated
     */
    function stopSound(soundIds: Array<string>): void;
    /**
     *@deprecated
     */
    function stopSound(soundId: string): void;
    /**
     *@deprecated
     */
    function stopSound(): void;
    /**
     *@deprecated
     */
    function setHighlightGlowInnerColor(red: number, green: number, blue: number): void;
    /**
     *@deprecated
     */
    function setHighlightGlowOuterColor(red: number, green: number, blue: number): void;
    /**
     *@deprecated
     */
    function setHighlightGlowIntensity(intensity: number): void;
    /**
     *@deprecated
     */
    function setHighlightGlowWidth(pixels: number): void;
    /**
     *@deprecated
     */
    function setMood(value: number): void;
    /**
     *@deprecated
     */
    function setTerrain(terrain: string): void;
    /**
     *@deprecated
     */
    function setTransparentBackground(transparent: boolean): void;
    /**
     *@deprecated
     */
    function renderAxes(b: boolean): void;
    /**
     *@deprecated
     */
    function renderBoundingBoxes(b: boolean): void;
    /**
     *@deprecated
     */
    function renderSlot(b: boolean, slot: string): void;
    /**
     *@deprecated
     */
    function renderLineLabels(b: boolean): void;
    /**
     *@deprecated
     */
    function renderShadows(b: boolean): void;
    /**
     *@deprecated
     */
    function clear(): void;
    function deleteItems(): void;
    /**
     *@deprecated
     */
    function createSpeechSynthesis(handler: (((arg0: TextToSpeech) => void))): void;
    /**
     *@deprecated
     */
    function getInputDirection(): Vector3;
    /**
     *@deprecated
     */
    const inputDirection: Vector3;
    /**
     *@deprecated
     */
    function traceUnits(x: number, y: number, z: number, dirX: number, dirY: number, dirZ: number): string;
    /**
     *@deprecated
     */
    function addToTraceFilter(item: BaseItem): void;
    /**
     *@deprecated
     */
    function removeFromTraceFilter(item: BaseItem): void;
    /**
     *@deprecated
     */
    function shapeCast(item1: BaseItem, x1: number, y1: number, z1: number, item2: BaseItem, x2: number, y2: number, z2: number): number;
    /**
     *@deprecated
     */
    function getLastTracePoint(): Vector3;
    /**
     *@deprecated
     */
    function setFadeObjectToCamera(b: boolean): void;
    /**
     *@deprecated
     */
    function isGyroMode(): boolean;
    /**
     *@deprecated
     */
    function isVRMode(): boolean;
    /**
     *@deprecated
     */
    function isARMode(): boolean;
    /**
     *@deprecated
     */
    function isARModeSupported(): boolean;
    /**
     *@deprecated
     */
    function getARSceneScale(): number;
    /**
     *@deprecated
     */
    function setARSceneScale(scale: number): void;
    /**
     *@deprecated
     */
    function getARSceneRotation(): number;
    /**
     *@deprecated
     */
    function setARSceneRotation(rotation: number): void;
    /**
     *@deprecated
     */
    function getMarkerPosition(name: string): PositionService;
    /**
     *@deprecated
     */
    function isMarkerTracked(name: string): boolean;
    /**
     *@deprecated
     */
    function getMarker(name: string): Marker;
    /**
     *@deprecated
     */
    function setGyroMode(): void;
    /**
     *@deprecated
     */
    function setVRMode(): void;
    /**
     *@deprecated
     */
    function setARMode(): void;
    /**
     *@deprecated
     */
    function setDefaultMode(): void;
    /**
     *@deprecated
     */
    function onVRModeChanged(handler: (((arg0: boolean) => void))): void;
    /**
     *@deprecated
     */
    function isMobile(): boolean;
    /**
     *@deprecated
     */
    function isTablet(): boolean;
    /**
     *@deprecated
     */
    function setDefaultOrigin(slot: string): void;
    /**
     *@deprecated
     */
    function showWebViewPopup(url: string, title: string): Disposable;
    /**
     *@deprecated
     */
    function showWebViewPopup(url: string, title: string, confirmLabel: string): Disposable;
    /**
     *@deprecated
     */
    function showWebViewPopup(url: string, title: string, confirmLabel: string, onClose: ((() => void))): Disposable;
    /**
     *@deprecated
     */
    function setReticleInput(reticleInput: boolean): void;
    /**
     *@deprecated
     */
    function createJoystick(): Joystick;
    /**
     *@deprecated
     */
    function createCameraJoystick(): Joystick;
    /**
     *@deprecated
     */
    function createJoystick(side: 'left' | 'right'): Joystick;
    /**
     *@deprecated
     */
    function removeJoystick(): void;
    /**
     *@deprecated
     */
    function removeJoystick(side: 'left' | 'right'): void;
    /**
     *@deprecated
     */
    function onExit(onExit: ((() => void))): void;
    /**
     *@deprecated
     */
    function createLearningEnvironment(stateSpaceSize: number, actionSpaceSize: number, doAction: (((action: Array<number>) => void)), doGetResponse: ((() => Array<number>)), doReset: ((() => Array<number>))): void;
    const index: number;
    const name: string;
    /**
     *@deprecated
     */
    function restart(): void;
}
declare namespace Settings {
    /**
     *@deprecated
     */
    function enableFeature(permissionName: string, enabled: boolean): void;
    function setFeature(permissionName: string, enabled: boolean): void;
    let objectEditingAllowed: boolean;
    let defaultOrigin: string;
}
declare class Sound implements Disposable {
    playSpeed: number;
    playSpeedIndependent: boolean;
    play(): void;
    play(onFinish: ((() => void))): void;
    play(looping: boolean): void;
    stop(): void;
    pause(): void;
    resume(): void;
    /**
     *@deprecated
     */
    setVolume(volume: number): void;
    volume: number;
    currentPosition: number;
    readonly duration: number;
    dispose(): void;
    static playSpeedMultiplier: number;
    static load(id: string): Sound;
    static load(id: string, callback: (((arg0: Sound) => void))): Sound;
    static stopById(soundIds: Array<string>): void;
    static stopById(soundId: string): void;
    static stopAll(): void;
    static createSpeechSynthesis(handler: (((arg0: TextToSpeech) => void))): void;
    static playOneShot(sound: Sound, volume: number): void;
}
declare namespace Space {
    /**
     *@deprecated
     */
    function onHostStart(func: ((() => void))): void;
    /**
     *@deprecated
     */
    function onHostReceived(func: (((id: string, message: string) => void))): void;
    /**
     *@deprecated
     */
    function sendToHost(message: string): void;
    /**
     *@deprecated
     */
    function isHost(): boolean;
    function goToScene(sceneIndex: number): void;
    /**
     *@deprecated
     */
    function goToSceneIndex(sceneIndex: number): void;
    function goToNextScene(): void;
    function goToPreviousScene(): void;
    const scenes: ObservableList<SceneInfo>;
    function createScene(options: SceneOptions): SceneInfo;
    /**
     *@deprecated
     */
    function deleteScene(sceneId: string): void;
    /**
     *@deprecated
     */
    function getSceneIndex(): number;
    /**
     *@deprecated
     */
    const sceneIndex: number;
    /**
     *@deprecated
     */
    function getSceneName(): string;
    /**
     *@deprecated
     */
    const sceneName: string;
    /**
     *@deprecated
     */
    function getLocale(): string;
    /**
     *@deprecated
     */
    const locale: string;
    /**
     *@deprecated
     */
    function finishPlayMode(): void;
    /**
     *@deprecated
     */
    function finishPlayMode(imageId: string): void;
    /**
     *@deprecated
     */
    function startPlayMode(): void;
    /**
     *@deprecated
     */
    function showSceneNavigation(show: boolean): void;
    /**
     *@deprecated
     */
    function log(s: string): void;
    const model: Model;
    function setProperty(key: string, value: string): void;
    function getProperty(key: string): string;
    function setGlobalProperty(key: string, value: string): void;
    /**
     *@deprecated
     */
    function setPhysicsTickRate(tick: number): void;
    /**
     *@deprecated
     */
    function getPhysicsTickRate(): number;
    let synchronizedNavigation: boolean;
    function copyScript(scriptName: string, fromId: string, toId: string): void;
    /**
     *@deprecated
     */
    function httpGet(path: string, callback: (((arg0: string) => void))): void;
    /**
     *@deprecated
     */
    function resetCurrentScene(): void;
    const name: string;
}
declare namespace Time {
    function schedule(func: ((() => void)), delay: number): Disposable;
    function scheduleRepeating(func: (((deltaTime: number) => void)), period: number): Disposable;
    function scheduleRepeating(func: (((deltaTime: number) => void))): Disposable;
    /**
     *@deprecated
     */
    function schedulePhysics(func: ((() => void)), delay: number): Disposable;
    /**
     *@deprecated
     */
    function scheduleRepeatingPhysics(func: (((deltaTime: number) => void)), period: number): Disposable;
    /**
     *@deprecated
     */
    function scheduleRepeatingPhysics(func: (((deltaTime: number) => void))): Disposable;
    const currentTime: number;
    /**
     *@deprecated
     */
    const currentPhysicsTime: number;
    let timeScale: number;
    function delay(time: number): Promise<void>;
}
declare class Video {
    play(): void;
    pause(): void;
    stop(): void;
    looping: boolean;
    readonly playing: boolean;
    volume: number;
    currentPosition: number;
    readonly duration: number;
    onLoaded(handler: ((() => void))): Disposable;
}
declare namespace Web {
    function httpGet(path: string, callback: (((arg0: string) => void))): void;
    function httpGet(path: string): Promise<string>;
    function httpPost(path: string, data: string, callback: (((arg0: string) => void))): void;
    function httpPost(path: string, data: string): Promise<string>;
    let fullscreen: boolean;
}
declare class Asset {
    readonly id: string;
    readonly name: string;
}
declare namespace Data {
    interface UploadOptions<T> {
        readonly fileSizeLimit?: number;
        readonly onLoadStart?: ((() => void));
        readonly onError?: (((arg0: Data.ErrorType) => void));
        readonly onCancel?: ((() => void));
        readonly onLoadComplete: (((arg0: T) => void));
    }
}
declare namespace Data {
    function uploadImage(options: Data.ImageUploadOptions): Disposable;
    function uploadVideo(options: Data.UploadOptions<VideoAsset>): Disposable;
    function uploadSound(options: Data.UploadOptions<SoundAsset>): Disposable;
    function upload3dModel(options: Data.Model3dUploadOptions): Disposable;
    const assets: SpaceAssets;
    const library: Library;
    function getImprint(items: Array<BaseItem>): string;
    function createFromImprint(str: string): Array<BaseItem>;
    function createEnvironmentResource(name: string, data: string): Promise<string>;
    function loadEnvironmentResource(id: string): Promise<EnvironmentResource>;
}
declare class EnvironmentResource {
    readonly id: string;
    readonly data: string;
    readonly name: string;
    updateProperties(options: {
        readonly data?: string;
        readonly name?: string;
    }): Promise<void>;
}
declare namespace Data {
    type ErrorType = 'file_limit' | 'unknown';
}
declare class ImageAsset extends Asset {
    readonly type: string;
    readonly aspectRatio: number;
    readonly downsampled: string;
    createItem(position: Vector3): ImageItem;
    createItem(position: Vector3, addToScene: boolean): ImageItem;
}
declare namespace Data {
    interface ImageUploadOptions extends Data.UploadOptions<ImageAsset> {
        readonly downsampleSize?: number;
        readonly is360?: boolean;
        readonly onLoadComplete: (((arg0: ImageAsset) => void));
    }
}
declare class Library {
    readonly categories: Array<LibraryCategory>;
    getCategory(categoryName: string): LibraryCategory;
}
declare class LibraryCategory {
    readonly name: string;
    readonly subCategories: Array<LibrarySubCategory>;
    getSubCategory(subCategoryName: string): LibrarySubCategory;
}
declare class LibraryItem {
    readonly name: string;
    readonly availableToBasic: boolean;
    readonly thumbnailId: string;
    create(position: Vector3): BaseItem;
    create(position: Vector3, addToScene: boolean): BaseItem;
    readonly permissionLevel: 'public' | 'developer' | 'internal';
}
declare class LibrarySubCategory {
    readonly name: string;
    readonly items: Array<LibraryItem>;
}
declare class Model3dAsset extends Asset {
    createItem(position: Vector3): AnimatedItem;
    createItem(position: Vector3, addToScene: boolean): AnimatedItem;
}
declare namespace Data {
    interface Model3dUploadOptions extends Data.UploadOptions<Model3dAsset> {
        readonly showPopup?: boolean;
        readonly onLoadComplete: (((arg0: Model3dAsset) => void));
    }
}
declare class SoundAsset extends Asset {
    createItem(position: Vector3): SoundItem;
    createItem(position: Vector3, addToScene: boolean): SoundItem;
}
declare class SpaceAssets {
    readonly images: Array<ImageAsset>;
    readonly videos: Array<VideoAsset>;
    readonly sounds: Array<SoundAsset>;
    readonly models3d: Array<Model3dAsset>;
}
declare class VideoAsset extends Asset {
    readonly aspectRatio: number;
    createItem(position: Vector3): VideoItem;
    readonly snapshot: string;
    createItem(position: Vector3, addToScene: boolean): VideoItem;
}
declare class Controller {
    onButtonDown(handler: ((() => void)), button: 'trigger' | 'touch_button' | 'grip_button' | 'main_button' | 'secondary_button'): void;
    onButtonUp(handler: ((() => void)), button: 'trigger' | 'touch_button' | 'grip_button' | 'main_button' | 'secondary_button'): void;
    onButtonPressed(handler: ((() => void)), button: 'trigger' | 'touch_button' | 'grip_button' | 'main_button' | 'secondary_button'): void;
    readonly transform: ReadonlyTransform;
    readonly touched: boolean;
    readonly touch: Vector2;
    vibrate(duration: number): void;
    render(enabled: boolean): void;
    raycast(enabled: boolean): void;
    onCollisionEnter(handler: (((arg0: BaseItem) => void))): void;
    onCollisionExit(handler: (((arg0: BaseItem) => void))): void;
}
declare namespace Environment {
    let mood: number;
    let terrain: string;
    let transparentBackground: boolean;
    let dataString: string;
    function saveDataString(): void;
    let ambientIntensity: number;
    let headLightColor: Color;
    let surfaceColor: Color;
    let skyColor: Color;
    let skyIntensity: number;
    let simpleLighting: boolean;
    let fogColor: Color;
    let fogDensity: number;
    let fogForTerrain: boolean;
    let fogForItems: boolean;
    let maxLightsForItem: number;
    function recalculateEnvMap(): void;
    let envMapIntensity: number;
    let envMapProbePosition: Vector3;
    let envMapResolution: number;
}
declare namespace Environment {
    namespace skybox360 {
        let id: string;
        let rotation: number;
        function onLoaded(handler: ((() => void))): void;
        const video: Video;
    }
}
declare namespace Environment {
    namespace sun {
        let color: Color;
        let intensity: number;
        let backLightIntensity: number;
        let direction: Vector3;
        function setOrientation(q: Quat): void;
        let shadow: boolean;
        let shadowType: 'TAP_1' | 'PCF_2x2' | 'PCF_4x4' | 'PCF_6x6';
        let shadowMapResolution: number;
        let shadowMapWidth: number;
        let shadowStrength: number;
        let shadowBias: number;
        let shadowNormalBias: number;
        let position: Vector3;
    }
}
declare namespace GUI {
    class Painter extends GUI.BaseView {
        clear(): void;
        undo(): void;
        redo(): void;
        export(options: GUI.Painter.ExportOptions): void;
        readonly pen: Input.Pen;
        readonly activeLayer: GUI.Painter.Layer;
        readonly layers: Array<GUI.Painter.Layer>;
        touchRestricted: boolean;
        addLayer(): GUI.Painter.Layer;
        addLayer(layerIndex: number): GUI.Painter.Layer;
        dataString: string;
        readonly viewport: GUI.Painter.Viewport;
    }
}
declare namespace GUI {
    namespace Painter {
        type ExportErrorType = 'timeout_not_passed' | 'previous_export_not_finished' | 'unknown';
    }
}
declare namespace GUI {
    namespace Painter {
        interface ExportOptions {
            readonly scaleFactor?: number;
            readonly onLoadComplete?: (((arg0: ImageAsset) => void));
            readonly onLoadError?: (((arg0: GUI.Painter.ExportErrorType) => void));
        }
    }
}
declare namespace Input {
    class Pen {
        applyForce: boolean;
        opacity: number;
        color: Color;
        size: number;
        mode: PencilInputType;
        readonly position: Vector2;
        readonly velocity: Vector2;
        readonly force: number;
        readonly isDown: boolean;
    }
}
declare namespace GUI {
    namespace Painter {
        class Layer {
            active: boolean;
            visible: boolean;
            locked: boolean;
            opacity: number;
            readonly strokes: Array<GUI.Painter.Stroke>;
            clear(): void;
            moveToTop(): void;
            moveUp(): void;
            moveToBottom(): void;
            moveDown(): void;
            delete(): void;
            readonly index: number;
            dataString: string;
        }
    }
}
declare namespace GUI {
    namespace Painter {
        class Stroke {
            color: Color;
            opacity: number;
            size: number;
        }
    }
}
declare namespace GUI {
    namespace Painter {
        class Viewport {
            center: Vector2;
            scaleFactor: number;
        }
    }
}
declare namespace GUI {
    class CoBlocksEditorTab extends GUI.EditorTab {
        script: CoBlocks.Model.Script;
    }
}
declare namespace GUI {
    class EditorTab extends GUI.ScriptTab {
        name: string;
        visible: boolean;
        readonly type: GUI.EditorTabType;
    }
}
declare namespace GUI {
    type EditorTabType = 'script' | 'coblocks';
}
declare namespace GUI {
    namespace BuildMode {
        let logoVisible: boolean;
    }
}
declare namespace GUI {
    class Context implements Disposable {
        readonly size: Vector2;
        onResize(handler: (((arg0: Vector2) => void))): void;
        createButton(options: GUI.ButtonOptions): GUI.Button;
        createSlider(options: GUI.SliderOptions): GUI.Slider;
        createToggle(options: GUI.ToggleOptions): GUI.Toggle;
        createDropdown(options: GUI.DropdownOptions): GUI.Dropdown;
        createTextInput(options: GUI.TextInputOptions): GUI.TextInput;
        createDxTextInput(options: GUI.TextInputOptions): GUI.DxTextInput;
        createVBox(options: GUI.StackOptions): GUI.Stack;
        createHBox(options: GUI.StackOptions): GUI.Stack;
        createSpace(options: GUI.BaseViewOptions): GUI.BaseView;
        createImage(options: GUI.ImageOptions): GUI.Image;
        createVideo(options: GUI.VideoViewOptions): GUI.VideoView;
        createText(options: GUI.TextOptions): GUI.Text;
        createFlow(options: GUI.FlowOptions): GUI.Flow;
        createScroll(options: GUI.ScrollOptions): GUI.Scroll;
        createAbsLayout(options: GUI.BaseViewOptions): GUI.AbsLayout;
        createPopup(options: GUI.PopupOptions): GUI.Popup;
        createChart(options: GUI.BaseViewOptions): GUI.Chart;
        createPainter(options: GUI.BaseViewOptions): GUI.Painter;
        createSpriteAnimator(options: GUI.SpriteAnimatorOptions): GUI.SpriteAnimator;
        getLineHeight(fontSize: number): number;
        getLineHeight(fontSize: number, fontStyle: 'regular' | 'medium' | 'demibold' | 'bold' | 'heavy'): number;
        dispose(): void;
    }
}
declare namespace GUI {
    namespace Editor {
        let activeTab: GUI.EditorTab;
        function getTab(index: number): GUI.EditorTab;
        function getTab(name: string): GUI.EditorTab;
        const tabs: Array<GUI.EditorTab>;
        function showTabs(): void;
        function showTabs(predicate: (((tab: GUI.EditorTab) => boolean))): void;
        function createCoBlocksTab(name: string): GUI.CoBlocksEditorTab;
        function createScriptTab(name: string): GUI.ScriptEditorTab;
        /**
         *@deprecated
         */
        function setActiveTab(scriptName: string): void;
        /**
         *@deprecated
         */
        function setActiveTab(scriptIndex: number): void;
        let visible: boolean;
        let buttonVisible: boolean;
        let windowStateButtonVisible: boolean;
        /**
         *@deprecated
         */
        let coBlocksVisible: boolean;
        /**
         *@deprecated
         */
        let codeVisible: boolean;
        let scriptsVisible: boolean;
        let width: number;
        let dragBarVisible: boolean;
    }
}
declare namespace GUI {
    namespace HUD {
        function createJoystick(): Joystick;
        function createCameraJoystick(): Joystick;
        function createJoystick(side: 'left' | 'right'): Joystick;
        function removeJoystick(): void;
        function removeJoystick(side: 'left' | 'right'): void;
        function showInfoPanel(options: {
            readonly title: string;
            readonly image?: string;
            readonly text: string;
            /**
             *@deprecated
             */
            readonly autoRemove?: boolean;
            /**
             *@deprecated
             */
            readonly position?: Vector3;
            readonly onHide?: ((() => void));
        }): Disposable;
        function showQuizPanel(options: {
            readonly question: string;
            readonly answer1: string;
            readonly answer2: string;
            readonly answer3?: string;
            readonly answer4?: string;
            readonly correctAnswer: number;
            readonly onCorrect?: ((() => void));
            readonly onWrong?: ((() => void));
        }): Disposable;
        function showChoicePanel(options: {
            readonly question: string;
            readonly answer1: string;
            readonly answer2: string;
            readonly answer3?: string;
            readonly answer4?: string;
            readonly onAnswer?: (((arg0: number) => void));
        }): Disposable;
        let sceneNavigationVisible: boolean;
        let ARButtonVisible: boolean;
        let VRButtonVisible: boolean;
        let VRBackButtonVisible: boolean;
        let gyroscopeButtonVisible: boolean;
    }
}
declare namespace GUI {
    namespace __ProgressBar {
        let visible: boolean;
        let interactiveOnPhone: boolean;
        let buttonURL: string;
        let interactive: boolean;
    }
}
declare namespace GUI {
    /**
     *@deprecated
     */
    let toolbarColor: ColorWithAlpha;
    const screen: GUI.Context;
    let playButtonVisible: boolean;
    let playButtonEnabled: boolean;
    let helpButtonVisible: boolean;
    let viewInVrButtonVisible: boolean;
    let objectLibraryVisible: boolean;
    let environmentSettingsVisible: boolean;
    /**
     *@deprecated
     */
    function createButton(options: GUI.ButtonOptions): GUI.Button;
    /**
     *@deprecated
     */
    function createSlider(options: GUI.SliderOptions): GUI.Slider;
    /**
     *@deprecated
     */
    function createToggle(options: GUI.ToggleOptions): GUI.Toggle;
    /**
     *@deprecated
     */
    function createTextInput(options: GUI.TextInputOptions): GUI.TextInput;
    /**
     *@deprecated
     */
    function createVBox(options: GUI.StackOptions): GUI.Stack;
    /**
     *@deprecated
     */
    function createHBox(options: GUI.StackOptions): GUI.Stack;
    /**
     *@deprecated
     */
    function createSpace(options: GUI.BaseViewOptions): GUI.BaseView;
    /**
     *@deprecated
     */
    function createImage(options: GUI.ImageOptions): GUI.Image;
    /**
     *@deprecated
     */
    function createText(options: GUI.TextOptions): GUI.Text;
    /**
     *@deprecated
     */
    function createFlow(options: GUI.FlowOptions): GUI.Flow;
    /**
     *@deprecated
     */
    function createScroll(options: GUI.ScrollOptions): GUI.Scroll;
    /**
     *@deprecated
     */
    function createAbsLayout(options: GUI.BaseViewOptions): GUI.AbsLayout;
    /**
     *@deprecated
     */
    function createChart(options: GUI.BaseViewOptions): GUI.Chart;
    /**
     *@deprecated
     */
    function addView(view: GUI.BaseView): void;
    /**
     *@deprecated
     */
    function removeView(view: GUI.BaseView): void;
    /**
     *@deprecated
     */
    function onResize(handler: (((arg0: Vector2) => void))): void;
    /**
     *@deprecated
     */
    const screenSize: Vector2;
    /**
     *@deprecated
     */
    function createPopup(options: GUI.PopupOptions): GUI.Popup;
    /**
     *@deprecated
     */
    function showPopup(popup: GUI.Popup): void;
    /**
     *@deprecated
     */
    function createWebPopup(options: {
        readonly url: string;
        readonly title: string;
        readonly confirmLabel?: string;
        readonly onClose?: ((() => void));
    }): Disposable;
    function showWebPopup(options: {
        readonly url: string;
        readonly title: string;
        readonly confirmLabel?: string;
        readonly onClose?: ((() => void));
    }): Disposable;
    function addHelpOption(options: DropdownHelpOption): void;
    let screenOrientation: 'landscape' | 'portrait';
    let screenAutoRotate: boolean;
    const defaultShadow: GUI.Shadow;
    let debugHoverEnabled: boolean;
}
declare namespace IDE {
    /**
     *@deprecated
     */
    function showEnvironmentSettings(show: boolean): void;
    /**
     *@deprecated
     */
    function allowEditObjects(show: boolean): void;
    /**
     *@deprecated
     */
    function showObjectLibrary(show: boolean): void;
    /**
     *@deprecated
     */
    function showPlayButton(show: boolean): void;
    /**
     *@deprecated
     */
    function showVRButton(show: boolean): void;
    /**
     *@deprecated
     */
    function showARButton(show: boolean): void;
    /**
     *@deprecated
     */
    function showVRBackButton(show: boolean): void;
    /**
     *@deprecated
     */
    function showGyroscopeButton(show: boolean): void;
    /**
     *@deprecated
     */
    function showScripts(show: boolean): void;
    /**
     *@deprecated
     */
    function setScriptTab(scriptName: string): void;
    /**
     *@deprecated
     */
    function setScriptTabByIndex(scriptIndex: number): void;
    /**
     *@deprecated
     */
    function setToolbarColor(r: number, g: number, b: number, a: number): void;
    /**
     *@deprecated
     */
    function setPermissionEnabled(permissionName: string, enabled: boolean): void;
}
declare namespace GUI {
    class ScriptEditorTab extends GUI.EditorTab {
        script: string;
    }
}
declare namespace GUI {
    class ScriptTab {
        readonly index: number;
        readonly name: string;
        active: boolean;
    }
}
declare namespace ImmersiveReader {
    function launchAsync(content: {
        readonly title?: string;
        readonly chunks: Array<{
            readonly content: string;
            readonly lang?: string;
        }>;
    }): Promise<void>;
    function launchAsync(content: {
        readonly title?: string;
        readonly chunks: Array<{
            readonly content: string;
            readonly lang?: string;
        }>;
    }, options: {
        readonly timeout?: number;
        readonly onExit?: ((() => void));
    }): Promise<void>;
}
declare namespace Input {
    function onButtonDown(handler: ((() => void))): void;
    function onButtonDown(handler: ((() => void)), buttonString: string): void;
    function onButtonUp(handler: ((() => void))): void;
    function onButtonUp(handler: ((() => void)), buttonString: string): void;
    function onButtonPressed(handler: ((() => void))): void;
    function onButtonPressed(handler: ((() => void)), buttonString: string): void;
    function onMouseWheel(handler: (((arg0: Vector2) => void))): void;
    /**
     *@deprecated
     */
    function requestPlayerControl(enabled: boolean): void;
    /**
     *@deprecated
     */
    let customInputEventsConsumed: boolean;
    let preserveApplicationInput: boolean;
    const clickDirection: Vector3;
    const mousePosition: Vector2;
    function onEmptyClick(handler: ((() => void))): void;
    function onExternalCommand(callback: (((command: any, source: Window) => void))): void;
    function getController(): Controller;
    function getController(index: number): Controller;
    function onSensorRotation(handler: (((arg0: PositionService) => void))): void;
    let reticleEnabled: boolean;
    function copyToClipboard(text: string): void;
}
declare class Model implements Model {
    readonly id: string;
    getProperty(key: string): Property<string>;
    getNumberProperty(key: string): Property<number>;
    getVector2Property(key: string): Property<Vector2>;
    getVector3Property(key: string): Property<Vector3>;
    getBooleanProperty(key: string): Property<boolean>;
    getQuatProperty(key: string): Property<Quat>;
    getColorProperty(key: string): Property<Color>;
    getChild(key: string): Property<Model>;
    getObservableList(key: string): ObservableList<Model>;
    constructor();
}
declare interface Model {
    readonly id: string;
    getProperty(key: string): Property<string>;
    getNumberProperty(key: string): Property<number>;
    getVector2Property(key: string): Property<Vector2>;
    getVector3Property(key: string): Property<Vector3>;
    getBooleanProperty(key: string): Property<boolean>;
    getQuatProperty(key: string): Property<Quat>;
    getColorProperty(key: string): Property<Color>;
    getChild(key: string): Property<Model>;
    getObservableList(key: string): ObservableList<Model>;
}
declare class Property<T> {
    value: T;
    onValueChanged(handler: (((arg0: T) => void))): Disposable;
}
declare class ReadableProperty<T> {
    readonly value: T;
    onValueChanged(handler: (((arg0: T) => void))): Disposable;
}
declare class SceneInfo {
    readonly id: string;
    name: string;
    index: number;
    thumbnail: string;
    readonly type: SceneType;
    copy(name: string): SceneInfo;
    delete(): void;
    readonly syncedProperties: {
        readonly name: ReadableProperty<string>;
        readonly thumbnail: ReadableProperty<string>;
    };
}
declare interface SceneOptions {
    readonly name: string;
    readonly type?: SceneType;
    readonly index?: number;
    readonly defaultSkyBox?: string;
}
declare namespace GUI {
    class AbsLayout extends GUI.Group {
        add(view: GUI.BaseView): void;
        add(view: GUI.BaseView, pos: Vector2): void;
        add(view: GUI.BaseView, horizontal: 'leading' | 'center' | 'trailing' | 'fill', vertical: 'leading' | 'center' | 'trailing' | 'fill'): void;
        setPos(view: GUI.BaseView, pos: Vector2): void;
    }
}
declare namespace GUI {
    class BaseButton extends GUI.BaseView {
        setBackgroundColor(color: ColorWithAlpha | Color): void;
        setBackgroundColor(color: ColorWithAlpha | Color, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
        setBorderColor(color: ColorWithAlpha | Color): void;
        setBorderColor(color: ColorWithAlpha | Color, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
        onHover(handler: (((arg0: boolean) => void))): void;
        onPressDown(handler: (((arg0: Vector2) => void))): void;
        /**
         *@deprecated
         */
        onPress(handler: (((arg0: Vector2) => void))): void;
        onPressUp(handler: (((arg0: Vector2) => void))): void;
        onClick(handler: ((() => void))): void;
        getCursor(callback: (((pos: Vector2, pressed: boolean) => 'none' | 'pointer' | 'text' | 'grab' | 'grabbing' | 'ew_resize'))): void;
        enabled: boolean;
        selected: boolean;
        draggable: boolean;
        dragOnLongPress: boolean;
        onDragStart(handler: ((() => void))): void;
        onDrag(handler: (((arg0: Vector2) => void))): void;
        onDragEnd(handler: ((() => void))): void;
    }
}
declare namespace GUI {
    class BaseView {
        setBackgroundColor(color: ColorWithAlpha | Color): void;
        setBorderColor(color: ColorWithAlpha | Color): void;
        opacity: number;
        borderWidth: number;
        cornerRadius: number;
        position: Vector2;
        width: number;
        height: number;
        size: Vector2;
        margin: Insets;
        setMargin(margin: number): void;
        setMargin(left: number, top: number, right: number, bottom: number): void;
        adjustPosition(callback: (((size: Vector2, guiContext: GUI.Context) => Vector2))): void;
        adjustSize(callback: (((size: Vector2, guiContext: GUI.Context) => Vector2))): void;
        onScreenResize(callback: (((size: Vector2, guiContext: GUI.Context) => void))): void;
        onScreenOrientation(callback: (((arg0: 'landscape' | 'portrait') => void))): void;
        show(): void;
        hide(): void;
        delete(): void;
        relayout(): void;
        shadow: GUI.Shadow;
        ignoreTrace: boolean;
        ignoreStretch: boolean;
    }
}
declare namespace GUI {
    class Button extends GUI.Stack {
        text: GUI.Text;
        image: GUI.Image;
    }
}
declare namespace GUI {
    class Chart extends GUI.BaseView {
        clear(): void;
        addPoint(x: number, y: number): void;
        lineColor: Color;
        lineWidth: number;
    }
}
declare namespace GUI {
    class Dropdown extends GUI.BaseButton {
        options: Array<GUI.DropdownOption>;
        gap: number;
        currentOption: number;
        enabled: boolean;
        clearOptions(): void;
        expand(): void;
        collapse(): void;
        onValueChanged(onValueChanged: (((arg0: number) => void))): void;
        onCancel(onCancel: ((() => void))): void;
        addOption(option: GUI.DropdownOption): void;
        addOptions(options: Array<GUI.DropdownOption>): void;
        removeOption(index: number): void;
        setOptionBackgroundColor(color: ColorWithAlpha | Color, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
        textTemplate: GUI.Text;
    }
}
declare namespace GUI {
    class DxTextInput extends GUI.BaseView {
        text: string;
        placeholder: string;
        readonly horizontalAlignment: 'center' | 'left' | 'right';
        readonly verticalAlignment: 'top' | 'center' | 'bottom';
        readOnly: boolean;
        focused: boolean;
        onValueChange(handler: (((arg0: string) => void))): void;
        onStartEdit(handler: ((() => void))): void;
        onEndEdit(handler: ((() => void))): void;
        characterLimit: number;
        setTextColor(color: ColorWithAlpha | Color): void;
        setPlaceholderColor(color: ColorWithAlpha | Color): void;
        padding: Insets;
        setPadding(padding: number): void;
        setPadding(left: number, top: number, right: number, bottom: number): void;
    }
}
declare namespace GUI {
    class Flow extends GUI.Group {
        columns: number;
        rows: number;
        gap: number;
        orientation: 'horizontal' | 'vertical';
    }
}
declare namespace GUI {
    class Group extends GUI.BaseView {
        add(view: GUI.BaseView): void;
        remove(view: GUI.BaseView): void;
    }
}
declare namespace GUI {
    class Image extends GUI.BaseView {
        setId(id: string): void;
        setId(id: string, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
        webUrl: string;
        isGif: boolean;
        setColor(color: ColorWithAlpha | Color): void;
        setColor(color: ColorWithAlpha | Color, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
        imageSize: Vector2;
        pivot: Vector2;
        rotation: number;
        fit: 'fill' | 'contain' | 'cover';
    }
}
declare namespace GUI {
    class Popup {
        type: 'info' | 'warning' | 'question' | 'confirmation' | 'create';
        primaryButtonLabel: string;
        secondaryButtonLabel: string;
        content: GUI.BaseView;
        onPrimary: ((() => void));
        onSecondary: ((() => void));
        enableCloseButton: boolean;
        canBeClosed: boolean;
        onCancel: (((arg0: boolean) => void));
        backgroundColor: ColorWithAlpha;
        title: GUI.Text;
        body: GUI.Text;
        show(): void;
        hide(): void;
    }
}
declare namespace GUI {
    class Scroll extends GUI.BaseView {
        orientation: 'horizontal' | 'vertical' | 'both';
        content: GUI.BaseView;
        move(amount: number): void;
        move(amount: Vector2): void;
        offset: number;
        offsetX: number;
        offsetY: number;
        readonly maxOffset: number;
        readonly maxOffsetX: number;
        readonly maxOffsetY: number;
        ensureVisibleView(view: GUI.BaseView, start: boolean): void;
        ensureVisibleView(view: GUI.BaseView, start: boolean, smooth: boolean): void;
        ensureOffset(offset: number): void;
        ensureOffsetX(offsetX: number): void;
        ensureOffsetY(offsetY: number): void;
        free(): void;
    }
}
declare namespace GUI {
    class Slider extends GUI.BaseButton {
        value: number;
        minValue: number;
        maxValue: number;
        onValueChange(handler: (((arg0: number) => void))): void;
        onChangeStart(handler: ((() => void))): void;
        onChangeEnd(handler: ((() => void))): void;
        setSliderColor(color: ColorWithAlpha | Color): void;
        stepSize: number;
        wholeNumbers: boolean;
        text: GUI.Text;
    }
}
declare namespace GUI {
    class SpriteAnimator extends GUI.BaseView {
        fps: number;
        currentFrame: number;
        setColor(color: ColorWithAlpha | Color): void;
        looping: boolean;
        onFinish(callback: ((() => void))): void;
        play(): void;
        pause(): void;
        stop(): void;
    }
}
declare namespace GUI {
    class Stack extends GUI.BaseButton {
        add(view: GUI.BaseView): void;
        remove(view: GUI.BaseView): void;
        gap: number;
        orientation: 'horizontal' | 'vertical';
        alignment: 'leading' | 'center' | 'trailing' | 'fill';
        distribution: 'leading' | 'center' | 'trailing' | 'fill';
    }
}
declare namespace GUI {
    class TextInput extends GUI.BaseButton {
        text: string;
        placeholder: string;
        /**
         *@deprecated
         */
        readonly textAlignment: 'center' | 'left' | 'right';
        readonly horizontalAlignment: 'center' | 'left' | 'right';
        readonly verticalAlignment: 'top' | 'center' | 'bottom';
        readOnly: boolean;
        spellcheck: boolean;
        focused: boolean;
        onValueChange(handler: (((arg0: string) => void))): void;
        onStartEdit(handler: ((() => void))): void;
        onEndEdit(handler: ((() => void))): void;
        characterLimit: number;
        height: number;
        setTextColor(color: ColorWithAlpha | Color): void;
        setPlaceholderColor(color: ColorWithAlpha | Color): void;
        padding: Insets;
        setPadding(padding: number): void;
        setPadding(left: number, top: number, right: number, bottom: number): void;
    }
}
declare namespace GUI {
    class Text extends GUI.BaseView {
        label: string;
        /**
         *@deprecated
         */
        labelAlignment: 'center' | 'left' | 'right';
        horizontalAlignment: 'center' | 'left' | 'right';
        verticalAlignment: 'top' | 'center' | 'bottom';
        fontSize: number;
        fontStyle: 'regular' | 'medium' | 'demibold' | 'bold' | 'heavy';
        setColor(color: ColorWithAlpha | Color): void;
        setColor(color: ColorWithAlpha | Color, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
    }
}
declare namespace GUI {
    class Toggle extends GUI.BaseButton {
        onValueChange(handler: (((arg0: boolean) => void))): void;
        setToggleColor(color: ColorWithAlpha | Color): void;
        setToggleColor(color: ColorWithAlpha | Color, state: 'normal' | 'hovered' | 'selected' | 'pressed' | 'disabled'): void;
        isOn: boolean;
        labelDistribution: 'left' | 'right';
        readonly: boolean;
        text: GUI.Text;
    }
}
declare namespace GUI {
    class VideoView extends GUI.BaseView {
        readonly video: Video;
    }
}
declare namespace Analytics {
    interface ActionOptions {
        readonly category: string;
        readonly action: string;
        readonly label: string;
        readonly value?: number;
    }
}
declare namespace Analytics {
    interface TimingOptions {
        readonly category: string;
        readonly value: string;
        readonly label: string;
        readonly time: number;
    }
}
declare namespace CoBlocks {
    namespace Model {
        interface ActionFilters {
            readonly drag?: (((block: CoBlocks.Model.Block) => boolean));
            readonly remove?: (((block: CoBlocks.Model.Block) => boolean));
            readonly edit?: (((field: CoBlocks.Model.FieldInput) => boolean));
            readonly addStatement?: (((block: CoBlocks.Model.StatementLikeBlock, target: CoBlocks.Model.StatementBlockContainer) => boolean));
            readonly addInput?: (((block: CoBlocks.Model.InputBlock, target: CoBlocks.Model.BlockInput) => boolean));
            readonly removeFunction?: (((ts_function: CoBlocks.Model.FunctionDefinition) => boolean));
            readonly editFunction?: (((ts_function: CoBlocks.Model.FunctionDefinition) => boolean));
        }
    }
}
declare class ColoredPart {
    readonly name: string;
    color: Color;
}
declare interface DropdownHelpOption {
    readonly icon: string;
    readonly label: string;
    readonly onClick: ((() => void));
}
declare namespace GUI {
    interface DropdownOption {
        readonly label: GUI.Text | string;
        readonly icon?: GUI.Image | string;
    }
}
declare namespace GUI {
    interface DropdownOptions extends GUI.BaseButtonOptions {
        readonly options?: Array<GUI.DropdownOption>;
        readonly gap?: number;
        readonly onCancel?: ((() => void));
        readonly onValueChanged?: (((arg0: number) => void));
        readonly currentOption?: number;
        readonly textTemplate?: GUI.Text;
    }
}
declare namespace ML {
    interface Options {
        readonly stateSpaceSize: number;
        readonly actionSpaceSize: number;
        readonly action: (((action: Array<number>) => void));
        readonly response: ((() => Array<number>));
        readonly reset: ((() => Array<number>));
    }
}
declare namespace RayCast {
    class Result {
        readonly item: BaseItem;
        readonly distance: number;
        readonly point: Vector3;
    }
}
declare interface ReadonlyList<T> extends Iterable<T> {
    readonly [key: number]: T;
    readonly length: number;
}
declare class ReadonlyTransform {
    readonly position: Vector3;
    readonly rotation: Quat;
    readonly scale: number;
    readonly axisX: Vector3;
    readonly axisY: Vector3;
    readonly axisZ: Vector3;
    readonly forward: Vector3;
    readonly right: Vector3;
    readonly up: Vector3;
    worldToLocalPoint(position: Vector3): Vector3;
    /**
     *@deprecated
     */
    worldToLocalVector(position: Vector3): Vector3;
    localToWorldPoint(position: Vector3): Vector3;
    /**
     *@deprecated
     */
    localToWorldVector(position: Vector3): Vector3;
    copy(): Transform;
}
declare class Rect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly position: Vector2;
    readonly size: Vector2;
    readonly center: Vector2;
    constructor(x: number, y: number, width: number, height: number);
    constructor(position: Vector2, size: Vector2);
}
declare class Color {
    readonly red: number;
    readonly green: number;
    readonly blue: number;
    constructor(red: number, green: number, blue: number);
    constructor(hex: string);
    static readonly white: Color;
    static readonly black: Color;
    static readonly darkGray: Color;
    static readonly gray: Color;
    static readonly lightGray: Color;
    static readonly veryLightGray: Color;
    static readonly skyBlue: Color;
    static readonly skyBlueLight: Color;
    static readonly cyan: Color;
    static readonly red: Color;
    static readonly darkRed: Color;
    static readonly veryDarkRed: Color;
    static readonly deepRed: Color;
    static readonly orange: Color;
    static readonly darkGreen: Color;
    static readonly veryDarkGreen: Color;
    static readonly green: Color;
    static readonly lightGreen: Color;
    static readonly blue: Color;
    static readonly yellow: Color;
    static readonly golden: Color;
    static readonly lightBlue: Color;
    static readonly deepBlue: Color;
    static readonly darkBlue: Color;
    static readonly lightPink: Color;
    static random(): Color;
}
declare class ColorWithAlpha extends Color {
    readonly alpha: number;
    constructor(red: number, green: number, blue: number, alpha: number);
    constructor(hex: string);
}
declare class ObservableList<T> implements ReadonlyList<T> {
    add(item: T): void;
    add(item: T, index: number): void;
    remove(item: T): void;
    remove(index: number): void;
    clear(): void;
    onItemAdded(handler: (((item: T, index: number) => void))): Disposable;
    onItemRemoved(handler: (((item: T, index: number) => void))): Disposable;
    readonly [key: number]: T;
    readonly length: number;
    [Symbol.iterator](): Iterator<T>;
}
declare interface __PhongParameters {
    readonly dLevel: number;
    readonly dPower: number;
    readonly sLevel: number;
    readonly sPower: number;
}
declare class Transform extends ReadonlyTransform {
    position: Vector3;
    rotation: Quat;
    scale: number;
    set(transform: ReadonlyTransform): Transform;
    lookAt(worldPosition: Vector3, worldUp: Vector3): Transform;
    lookAt(worldPosition: Vector3): Transform;
    setDirection(direction: Vector3, worldUp: Vector3): Transform;
    setDirection(direction: Vector3): Transform;
    rotate(origin: Vector3, axis: Vector3, angleInRadians: number): Transform;
    rotate(axis: Vector3, angleInRadians: number): Transform;
    rotateLocal(offset: Vector3, axis: Vector3, angleInRadians: number): Transform;
    rotateLocal(axis: Vector3, angleInRadians: number): Transform;
    translate(translation: Vector3): Transform;
    translateLocal(translation: Vector3): Transform;
    multScale(scaleFactor: number): Transform;
    apply(other: ReadonlyTransform): Transform;
    compose(other: ReadonlyTransform): Transform;
    invert(): Transform;
    swapYZ(): Transform;
    constructor();
    constructor(pos: Vector3, axisX: Vector3, axisY: Vector3, axisZ: Vector3);
}
declare namespace GUI {
    interface BaseButtonOptions extends GUI.BaseViewOptions {
        readonly onHover?: (((arg0: boolean) => void));
        readonly onPressDown?: (((arg0: Vector2) => void));
        /**
         *@deprecated
         */
        readonly onPress?: (((arg0: Vector2) => void));
        readonly onPressUp?: (((arg0: Vector2) => void));
        readonly onClick?: ((() => void));
        readonly getCursor?: (((pos: Vector2, pressed: boolean) => 'none' | 'pointer' | 'text' | 'grab' | 'grabbing' | 'ew_resize'));
        readonly draggable?: boolean;
        readonly dragOnLongPress?: boolean;
        readonly onDragStart?: ((() => void));
        readonly onDrag?: (((arg0: Vector2) => void));
        readonly onDragEnd?: ((() => void));
    }
}
declare namespace GUI {
    interface BaseViewOptions {
        readonly backgroundColor?: ColorWithAlpha | Color;
        readonly borderColor?: ColorWithAlpha | Color;
        readonly borderWidth?: number;
        readonly cornerRadius?: number;
        readonly position?: Vector2;
        readonly width?: number;
        readonly height?: number;
        readonly size?: Vector2;
        readonly margin?: number | Insets;
        readonly adjustPosition?: (((size: Vector2, guiContext: GUI.Context) => Vector2));
        readonly adjustSize?: (((size: Vector2, guiContext: GUI.Context) => Vector2));
        readonly onCanvasResize?: (((size: Vector2, guiContext: GUI.Context) => void));
        readonly onScreenOrientation?: (((arg0: 'landscape' | 'portrait') => void));
        readonly shadow?: GUI.Shadow;
        readonly ignoreTrace?: boolean;
        readonly ignoreStretch?: boolean;
    }
}
declare namespace GUI {
    interface ButtonOptions extends GUI.BaseButtonOptions {
        readonly gap?: number;
        readonly orientation?: 'horizontal' | 'vertical';
        readonly text?: GUI.Text | string;
        readonly image?: GUI.Image | string;
    }
}
declare namespace GUI {
    interface FlowOptions extends GUI.BaseViewOptions {
        readonly columns?: number;
        readonly rows?: number;
        readonly gap?: number;
        readonly orientation?: 'horizontal' | 'vertical';
    }
}
declare namespace GUI {
    interface ImageOptions extends GUI.BaseViewOptions {
        readonly id?: string;
        readonly webUrl?: string;
        readonly isGif?: boolean;
        readonly imageSize: Vector2;
        readonly color?: ColorWithAlpha | Color;
        readonly pivot?: Vector2;
        readonly rotation?: number;
        readonly fit?: 'fill' | 'contain' | 'cover';
    }
}
declare class Insets {
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    constructor(left: number, top: number, right: number, bottom: number);
}
declare namespace GUI {
    interface PopupOptions {
        readonly primaryButtonLabel?: string;
        readonly secondaryButtonLabel?: string;
        readonly backgroundColor?: ColorWithAlpha | Color;
        readonly content?: GUI.BaseView;
        readonly type?: 'info' | 'warning' | 'question' | 'confirmation' | 'create';
        readonly onPrimary?: ((() => void));
        readonly onSecondary?: ((() => void));
        readonly enableCloseButton?: boolean;
        readonly canBeClosed?: boolean;
        readonly onCancel?: (((arg0: boolean) => void));
        readonly body?: GUI.Text | string;
        readonly title: GUI.Text | string;
    }
}
declare namespace GUI {
    class Shadow {
        readonly color: ColorWithAlpha;
        readonly offset: Vector2;
        readonly blur: number;
        readonly spread: number;
        constructor(options: GUI.ShadowOptions);
    }
}
declare namespace GUI {
    interface ScrollOptions extends GUI.BaseViewOptions {
        readonly orientation?: 'horizontal' | 'vertical' | 'both';
        readonly content?: GUI.Group;
    }
}
declare namespace GUI {
    interface ShadowOptions {
        readonly color?: ColorWithAlpha | Color;
        readonly offset?: Vector2;
        readonly blur?: number;
        readonly spread?: number;
    }
}
declare namespace GUI {
    interface SliderOptions extends GUI.BaseButtonOptions {
        readonly value?: number;
        readonly minValue?: number;
        readonly maxValue?: number;
        readonly onValueChange?: (((arg0: number) => void));
        readonly onChangeStart?: ((() => void));
        readonly onChangeEnd?: ((() => void));
        readonly hasValueField?: boolean;
        readonly sliderColor?: ColorWithAlpha | Color;
        readonly wholeNumbers?: boolean;
        readonly stepSize?: number;
        readonly text?: GUI.Text | string;
    }
}
declare namespace GUI {
    interface SpriteAnimatorOptions extends GUI.BaseViewOptions {
        readonly id: string;
        readonly imageSize: Vector2;
        readonly color?: ColorWithAlpha | Color;
        readonly columns: number;
        readonly rows: number;
        readonly fps: number;
        readonly frames?: number;
        readonly looping?: boolean;
    }
}
declare namespace GUI {
    interface StackOptions extends GUI.BaseButtonOptions {
        readonly alignment: 'leading' | 'center' | 'trailing' | 'fill';
        readonly distribution: 'leading' | 'center' | 'trailing' | 'fill';
        readonly gap?: number;
    }
}
declare namespace GUI {
    interface TextInputOptions extends GUI.BaseButtonOptions {
        readonly multiline?: boolean;
        readonly readOnly?: boolean;
        readonly spellcheck?: boolean;
        readonly animated?: boolean;
        readonly text?: string;
        readonly placeholder?: string;
        readonly placeholderColor?: ColorWithAlpha | Color;
        readonly onValueChange?: (((arg0: string) => void));
        readonly onStartEdit?: ((() => void));
        readonly onEndEdit?: ((() => void));
        readonly characterLimit?: number;
        readonly fontSize?: number;
        readonly fontStyle?: 'regular' | 'medium' | 'demibold' | 'bold' | 'heavy';
        /**
         *@deprecated
         */
        readonly textAlignment?: 'center' | 'left' | 'right';
        readonly horizontalAlignment?: 'center' | 'left' | 'right';
        readonly verticalAlignment?: 'top' | 'center' | 'bottom';
        readonly textColor?: ColorWithAlpha | Color;
        readonly padding?: number | Insets;
        readonly focused?: boolean;
    }
}
declare namespace GUI {
    interface TextOptions extends GUI.BaseViewOptions {
        readonly label?: string;
        /**
         *@deprecated
         */
        readonly labelAlignment?: 'center' | 'left' | 'right';
        readonly horizontalAlignment?: 'center' | 'left' | 'right';
        readonly verticalAlignment?: 'top' | 'center' | 'bottom';
        readonly fontSize?: number;
        readonly fontStyle?: 'regular' | 'medium' | 'demibold' | 'bold' | 'heavy';
        readonly color?: ColorWithAlpha | Color;
        readonly multiline?: boolean;
    }
}
declare namespace GUI {
    interface ToggleOptions extends GUI.BaseButtonOptions {
        readonly onValueChange?: (((arg0: boolean) => void));
        readonly labelDistribution?: 'left' | 'right';
        readonly isOn?: boolean;
        readonly toggleStyle?: 'switch' | 'checkbox';
        readonly toggleColor?: ColorWithAlpha | Color;
        readonly readonly?: boolean;
        readonly gap?: number;
        readonly text?: GUI.Text | string;
    }
}
declare namespace GUI {
    interface VideoViewOptions extends GUI.BaseViewOptions {
        readonly id: string;
        readonly videoSize: Vector2;
    }
}
declare namespace AR {
    class Anchor {
        readonly transform: ReadonlyTransform;
    }
}
declare namespace AR {
    class BodyAnchor extends AR.Anchor {
        getJointTransform(jointName: 'root' | 'hips_joint' | 'left_up_leg_joint' | 'left_leg_joint' | 'left_foot_joint' | 'left_toes_joint' | 'left_toes_end_joint' | 'right_up_leg_joint' | 'right_leg_joint' | 'right_foot_joint' | 'right_toes_joint' | 'right_toes_end_joint' | 'spine_1_joint' | 'spine_2_joint' | 'spine_3_joint' | 'spine_4_joint' | 'spine_5_joint' | 'spine_6_joint' | 'spine_7_joint' | 'neck_1_joint' | 'neck_2_joint' | 'neck_3_joint' | 'neck_4_joint' | 'head_joint' | 'jaw_joint' | 'chin_joint' | 'nose_joint' | 'right_eye_joint' | 'right_eye_upper_lid_joint' | 'right_eye_lower_lid_joint' | 'right_eyeball_joint' | 'left_eye_joint' | 'left_eye_upper_lid_joint' | 'left_eye_lower_lid_joint' | 'left_eyeball_joint' | 'right_shoulder_1_joint' | 'right_arm_joint' | 'right_forearm_joint' | 'right_hand_joint' | 'right_hand_thumb_start_joint' | 'right_hand_thumb_1_joint' | 'right_hand_thumb_2_joint' | 'right_hand_thumb_end_joint' | 'right_hand_index_start_joint' | 'right_hand_index_1_joint' | 'right_hand_index_2_joint' | 'right_hand_index_3_joint' | 'right_hand_index_end_joint' | 'right_hand_mid_start_joint' | 'right_hand_mid_1_joint' | 'right_hand_mid_2_joint' | 'right_hand_mid_3_joint' | 'right_hand_mid_end_joint' | 'right_hand_ring_start_joint' | 'right_hand_ring_1_joint' | 'right_hand_ring_2_joint' | 'right_hand_ring_3_joint' | 'right_hand_ring_end_joint' | 'right_hand_pinky_start_joint' | 'right_hand_pinky_1_joint' | 'right_hand_pinky_2_joint' | 'right_hand_pinky_3_joint' | 'right_hand_pinky_end_joint' | 'left_shoulder_1_joint' | 'left_arm_joint' | 'left_forearm_joint' | 'left_hand_joint' | 'left_hand_thumb_start_joint' | 'left_hand_thumb_1_joint' | 'left_hand_thumb_2_joint' | 'left_hand_thumb_end_joint' | 'left_hand_index_start_joint' | 'left_hand_index_1_joint' | 'left_hand_index_2_joint' | 'left_hand_index_3_joint' | 'left_hand_index_end_joint' | 'left_hand_mid_start_joint' | 'left_hand_mid_1_joint' | 'left_hand_mid_2_joint' | 'left_hand_mid_3_joint' | 'left_hand_mid_end_joint' | 'left_hand_ring_start_joint' | 'left_hand_ring_1_joint' | 'left_hand_ring_2_joint' | 'left_hand_ring_3_joint' | 'left_hand_ring_end_joint' | 'left_hand_pinky_start_joint' | 'left_hand_pinky_1_joint' | 'left_hand_pinky_2_joint' | 'left_hand_pinky_3_joint' | 'left_hand_pinky_end_joint'): ReadonlyTransform;
        attachedItem: AnimatedItem;
        startRecord(): void;
        finishRecord(name: string, handler: (((arg0: string) => void))): void;
    }
}
declare namespace AR {
    class FaceAnchor extends AR.Anchor {
        readonly leftEyeTransform: ReadonlyTransform;
        readonly rightEyeTransform: ReadonlyTransform;
        getBlendShape(location: FaceBlendShapeLocation): number;
    }
}
declare type FaceBlendShapeLocation = 'eye_blink_left' | 'eye_look_down_left' | 'eye_wide_left' | 'eye_look_in_left' | 'eye_look_out_left' | 'eye_look_up_left' | 'eye_squint_left' | 'eye_blink_right' | 'eye_look_down_right' | 'eye_wide_right' | 'eye_look_in_right' | 'eye_look_out_right' | 'eye_look_up_right' | 'eye_squint_right' | 'brow_inner_up' | 'brow_inner_up_left' | 'brow_inner_up_right' | 'brow_down_left' | 'brow_down_right' | 'nose_sneer_left' | 'nose_sneer_right' | 'cheek_puff' | 'jaw_open' | 'jaw_forward' | 'jaw_left' | 'jaw_right' | 'tongue_out' | 'mouth_close' | 'mouth_smile_left' | 'mouth_smile_right';
declare class Marker implements PositionService {
    useForCamera: boolean;
    readonly transform: ReadonlyTransform;
    readonly tracked: boolean;
    onPositionChanged(handler: ((() => void))): void;
    onTrackingStateChanged(handler: (((arg0: boolean) => void))): void;
    attachToItem(item: BaseItem): void;
    itemsAlwaysVisible: boolean;
    /**
     *@deprecated
     */
    getPosition(): Vector3;
    /**
     *@deprecated
     */
    readonly position: Vector3;
    /**
     *@deprecated
     */
    getAxisX(): Vector3;
    /**
     *@deprecated
     */
    readonly axisX: Vector3;
    /**
     *@deprecated
     */
    getAxisY(): Vector3;
    /**
     *@deprecated
     */
    readonly axisY: Vector3;
    /**
     *@deprecated
     */
    getAxisZ(): Vector3;
    /**
     *@deprecated
     */
    readonly axisZ: Vector3;
    /**
     *@deprecated
     */
    getOrientationQuat(): Quat;
    /**
     *@deprecated
     */
    readonly orientationQuat: Quat;
    /**
     *@deprecated
     */
    distanceToItem(other: BaseItem): number;
    /**
     *@deprecated
     */
    distanceToPoint(x: number, y: number, z: number): number;
    /**
     *@deprecated
     */
    distanceToPoint(point: Vector3): number;
}
declare namespace AR {
    type MergeCubeSide = 'Right' | 'Left' | 'Front' | 'Back' | 'Top' | 'Bottom';
}
declare namespace AR {
    class PlaneAnchor extends AR.Anchor {
        readonly classification: 'none' | 'wall' | 'floor' | 'ceiling' | 'table' | 'seat' | 'window' | 'door';
        readonly orientation: 'horizontal' | 'vertical';
        readonly size: Vector2;
    }
}
declare namespace AR {
    type RotationDirection = 'up' | 'down' | 'left' | 'right';
}
declare namespace Camera {
    interface Projection {
        readonly mode: Camera.ProjectionMode;
        readonly size: number;
    }
}
declare namespace Camera {
    type ProjectionMode = 'perspective' | 'orthographic';
}
declare namespace CoBlocks {
    type __SuspendAction = (((continuation: ((() => void))) => void));
}
declare namespace CoBlocks {
    class ToolboxCategory {
        readonly title: string;
        getId(): string;
        readonly id: string;
        addBlock(id: string): void;
        addBlocks(ids: Array<string>): void;
        removeBlock(id: string): void;
        getColor(): string;
        color: string;
        setColor(color: string): void;
        icon: string;
        getParent(): CoBlocks.ToolboxCategory;
        readonly parent: CoBlocks.ToolboxCategory;
        addSubcategory(id: string, title: string): CoBlocks.ToolboxCategory;
        addSubcategory(subcategory: CoBlocks.ToolboxCategory): void;
        addSubcategory(subcategory: CoBlocks.ToolboxCategory, index: number): void;
        isExpanded(): boolean;
        expanded: boolean;
        expand(): void;
        collapse(): void;
        contains(id: string): boolean;
        removeFromParent(): void;
        getAllSubcategories(): Array<CoBlocks.ToolboxCategory>;
        readonly allSubcategories: Array<CoBlocks.ToolboxCategory>;
        removeAllSubcategories(): void;
        hideAllSubcategories(): void;
        isVisible(): boolean;
        visible: boolean;
        setVisible(visible: boolean): void;
        isEffectivelyVisible(): boolean;
        readonly effectivelyVisible: boolean;
    }
}
declare type PencilInputType = 'draw' | 'erase' | 'select' | 'drag' | 'globalErase';
declare namespace Application {
    type ItemEditMode = 'default' | 'rotation' | 'translation';
}
declare class Joystick {
    readonly position: Vector2;
    onButtonChanged(handler: ((() => void))): void;
    onButtonDown(handler: ((() => void))): void;
    onButtonUp(handler: ((() => void))): void;
    onButtonPressed(handler: ((() => void))): void;
}
declare class PathTail {
    getColor(): string;
    setColor(color: string): void;
    getThickness(): number;
    setThickness(thickness: number): void;
    addFirst(x: number, y: number, z: number): void;
    addLast(x: number, y: number, z: number): void;
    updateFirst(x: number, y: number, z: number): void;
    updateLast(x: number, y: number, z: number): void;
    removeFirst(): void;
    removeLast(): void;
    removeAll(): void;
}
declare class Tweener {
    setTimeScale(scale: number): Tweener;
    setEase(floatFunction: (((arg0: number) => number))): Tweener;
    setLoop(lType: 'restart' | 'yo_yo' | 'additive'): Tweener;
    setIterations(iterations: number): Tweener;
    pause(): void;
    resume(): void;
    stop(): void;
    play(): void;
    readonly playing: boolean;
    onFinish(callback: ((() => void))): void;
    static tweenTo<T>(tweenable: (((a: T, b: T, v: number) => T)), setter: (((arg0: T) => void)), startValue: T, endValue: T, duration: number): Tweener;
    static tweenTo<T>(setter: (((arg0: T) => void)), startValue: T, endValue: T, duration: number): Tweener;
}
declare class Tweenables {
    static readonly number: (((a: number, b: number, v: number) => number));
    static readonly vector3: (((a: Vector3, b: Vector3, v: number) => Vector3));
    static readonly vector2: (((a: Vector2, b: Vector2, v: number) => Vector2));
    static readonly color: (((a: Color, b: Color, v: number) => Color));
    static readonly quat: (((a: Quat, b: Quat, v: number) => Quat));
}
declare interface Disposable {
    dispose(): void;
}
declare class WindParameters {
    angle: number;
    setPreset(wind: 'calm' | 'strong'): void;
    /**
     *@deprecated
     */
    setStrongWind(): void;
    /**
     *@deprecated
     */
    setCalmWind(): void;
    speed: number;
    strength: number;
    heightFactorPow: number;
    waveFrequency: number;
    wavesStrength: number;
    wiggleStrength: number;
    noiseStrength: number;
    skew: number;
    enabled: boolean;
    constructor();
}
declare class Easing {
    static readonly easeInSine: (((x: number) => number));
    static readonly easeOutSine: (((x: number) => number));
    static readonly easeInOutSine: (((x: number) => number));
    static readonly easeInQuad: (((x: number) => number));
    static readonly easeOutQuad: (((x: number) => number));
    static readonly easeInOutQuad: (((x: number) => number));
    static readonly easeInCubic: (((x: number) => number));
    static readonly easeOutCubic: (((x: number) => number));
    static readonly easeInOutCubic: (((x: number) => number));
    static readonly easeInQuart: (((x: number) => number));
    static readonly easeOutQuart: (((x: number) => number));
    static readonly easeInOutQuart: (((x: number) => number));
    static readonly easeInQuint: (((x: number) => number));
    static readonly easeOutQuint: (((x: number) => number));
    static readonly easeInOutQuint: (((x: number) => number));
    static readonly easeInExpo: (((x: number) => number));
    static readonly easeOutExpo: (((x: number) => number));
    static readonly easeInOutExpo: (((x: number) => number));
    static readonly easeInBack: (((x: number) => number));
    static readonly easeOutBack: (((x: number) => number));
    static readonly easeInOutBack: (((x: number) => number));
    static readonly easeInCirc: (((x: number) => number));
    static readonly easeOutCirc: (((x: number) => number));
    static readonly easeInOutCirc: (((x: number) => number));
    static readonly easeInElastic: (((x: number) => number));
    static readonly easeOutElastic: (((x: number) => number));
    static readonly easeInOutElastic: (((x: number) => number));
    static readonly easeInBounce: (((x: number) => number));
    static readonly easeOutBounce: (((x: number) => number));
    static readonly easeInOutBounce: (((x: number) => number));
}
declare class Quat {
    getX(): Vector3;
    getY(): Vector3;
    getZ(): Vector3;
    apply(other: Quat): Quat;
    compose(other: Quat): Quat;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    readonly w: number;
    slerp(b: Quat, wb: number): Quat;
    /**
     *@deprecated
     */
    getX(oX: Vector3): Vector3;
    /**
     *@deprecated
     */
    getY(oY: Vector3): Vector3;
    /**
     *@deprecated
     */
    getZ(oZ: Vector3): Vector3;
    toString(): string;
    /**
     *@deprecated
     */
    copyFrom(quat: Quat): Quat;
    /**
     *@deprecated
     */
    copy(): Quat;
    getAngle(): number;
    getRotationAxis(): Vector3;
    getRotationAngle(): number;
    inverse(): Quat;
    getEulerAngles(): Vector3;
    constructor(qx: number, qy: number, qz: number, qw: number);
    static mul(a: Quat, b: Quat): Quat;
    static slerp(a: Quat, b: Quat, wb: number): Quat;
    static dot(a: Quat, b: Quat): number;
    static makeRotation(axis: Vector3, angle: number): Quat;
    static fromEulerAngles(e: Vector3): Quat;
    static fromEulerAngles(x: number, y: number, z: number): Quat;
}
declare class Vector2 {
    add(v: Vector2): Vector2;
    sub(v: Vector2): Vector2;
    mult(w: number): Vector2;
    div(w: number): Vector2;
    max(v: Vector2): Vector2;
    min(v: Vector2): Vector2;
    angle(v: Vector2): number;
    dot(v: Vector2): number;
    dist(v: Vector2): number;
    lerp(v: Vector2, t: number): Vector2;
    readonly x: number;
    readonly y: number;
    equals(v: Vector2): boolean;
    readonly length: number;
    readonly sqrLength: number;
    /**
     *@deprecated
     */
    norm(): number;
    /**
     *@deprecated
     */
    normalize(): Vector2;
    readonly normalized: Vector2;
    constructor();
    constructor(x: number, y: number);
    static add(a: Vector2, b: Vector2): Vector2;
    static sub(a: Vector2, b: Vector2): Vector2;
    static dot(a: Vector2, b: Vector2): number;
    static dist(a: Vector2, b: Vector2): number;
    static lerp(a: Vector2, b: Vector2, t: number): Vector2;
    static mult(v: Vector2, m: number): Vector2;
    static div(v: Vector2, d: number): Vector2;
    static max(a: Vector2, b: Vector2): Vector2;
    static min(a: Vector2, b: Vector2): Vector2;
    static angle(a: Vector2, b: Vector2): number;
}
declare class Vector3 {
    cross(other: Vector3): Vector3;
    project(other: Vector3): Vector3;
    projectOnPlane(normal: Vector3): Vector3;
    /**
     *@deprecated
     */
    normalize(): Vector3;
    readonly normalized: Vector3;
    limitLength(l: number): Vector3;
    min(other: Vector3): Vector3;
    max(other: Vector3): Vector3;
    add(other: Vector3): Vector3;
    div(d: number): Vector3;
    sub(other: Vector3): Vector3;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /**
     *@deprecated
     */
    set0(): Vector3;
    mult(m: number): Vector3;
    angle(other: Vector3): number;
    dot(other: Vector3): number;
    readonly length: number;
    readonly sqrLength: number;
    /**
     *@deprecated
     */
    length2(): number;
    dist(other: Vector3): number;
    equals(v: Vector3): boolean;
    toString(): string;
    /**
     *@deprecated
     */
    copyFrom(v: Vector3): Vector3;
    /**
     *@deprecated
     */
    set(x: number, y: number, z: number): Vector3;
    /**
     *@deprecated
     */
    copy(): Vector3;
    lerp(v: Vector3, t: number): Vector3;
    toArray(): Array<number>;
    constructor(x: number, y: number, z: number);
    static mult(v: Vector3, m: number): Vector3;
    static add(a: Vector3, b: Vector3): Vector3;
    static sub(a: Vector3, b: Vector3): Vector3;
    static angle(a: Vector3, b: Vector3): number;
    static cos(a: Vector3, b: Vector3): number;
    static dot(a: Vector3, b: Vector3): number;
    static cross(a: Vector3, b: Vector3): Vector3;
    static project(a: Vector3, b: Vector3): Vector3;
    static projectOnPlane(v: Vector3, normal: Vector3): Vector3;
    static norm2(v: Vector3): number;
    static dist(a: Vector3, b: Vector3): number;
    static distance2(a: Vector3, b: Vector3): number;
    static equals(a: Vector3, b: Vector3): boolean;
    static equalsNullable(a: Vector3, b: Vector3): boolean;
    static min(a: Vector3, b: Vector3): Vector3;
    static max(a: Vector3, b: Vector3): Vector3;
    static div(v: Vector3, d: number): Vector3;
    static triple(a: Vector3, b: Vector3, c: Vector3): number;
    static readonly zero: Vector3;
    static readonly one: Vector3;
    static readonly axisX: Vector3;
    static readonly axisY: Vector3;
    static readonly axisZ: Vector3;
}
declare namespace CoBlocks {
    namespace Model {
        class Block extends CoBlocks.Model.InputContainer {
            readonly id: string;
            copy(): CoBlocks.Model.Block;
            readonly inputName: string;
            removeFromContainer(): void;
            readonly kind: CoBlocks.Model.BlockKind;
            disabled: boolean;
            readonly actuallyDisabled: boolean;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class BlockInput extends CoBlocks.Model.Input {
            readonly shadow: CoBlocks.Model.InputBlock;
            block: CoBlocks.Model.InputBlock;
            readonly visibleBlock: CoBlocks.Model.InputBlock;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        type BlockKind = 'statement' | 'function_call' | 'input';
    }
}
declare namespace CoBlocks {
    namespace Model {
        class Script implements CoBlocks.Model.StatementBlockContainer {
            readonly functions: Array<CoBlocks.Model.FunctionDefinition>;
            addFunction(ts_function: CoBlocks.Model.FunctionDefinition): void;
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: 'statement_input' | 'script' | 'function';
            constructor();
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class Type {
            readonly kind: CoBlocks.Model.TypeKind;
            readonly typeArguments: Array<CoBlocks.Model.Type>;
            constructor(kind: CoBlocks.Model.TypeKind);
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        type TypeKind = 'int' | 'number' | 'string' | 'boolean' | 'dx_item' | 'dx_group' | 'dx_game_item' | 'dx_text_item' | 'dx_text_3d_item' | 'dx_text_item_interface' | 'dx_path_item' | 'dx_camera_item' | 'merge_cube_side' | 'dx_base_item' | 'dx_video_item' | 'list' | 'angle' | 'color' | 'vec3' | 'any';
    }
}
declare namespace CoBlocks {
    namespace Model {
        class FieldInput extends CoBlocks.Model.Input {
            text: string;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class Fragment extends CoBlocks.Model.InputContainer {
            readonly container: CoBlocks.Model.FragmentInput;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class FragmentInput extends CoBlocks.Model.Input {
            addFragment(index: number): CoBlocks.Model.Fragment;
            addFragment(): CoBlocks.Model.Fragment;
            addFragment(fragment: CoBlocks.Model.Fragment): void;
            addFragment(fragment: CoBlocks.Model.Fragment, index: number): void;
            removeFragment(fragment: CoBlocks.Model.Fragment): void;
            removeFragment(index: number): void;
            clear(): void;
            indexOfFragment(fragment: CoBlocks.Model.Fragment): number;
            readonly fragmentCount: number;
            readonly fragments: Array<CoBlocks.Model.Fragment>;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class FunctionCallBlock extends CoBlocks.Model.StatementLikeBlock {
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class FunctionDefinition implements CoBlocks.Model.StatementBlockContainer {
            readonly name: string;
            readonly returningValue: boolean;
            readonly parameters: Array<CoBlocks.Model.ParameterDefinition>;
            addParameter(parameter: CoBlocks.Model.ParameterDefinition): void;
            delete(): void;
            getContainer(): CoBlocks.Model.Script;
            disabled: boolean;
            readonly global: boolean;
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: 'statement_input' | 'script' | 'function';
            constructor(name: string);
            constructor(name: string, parameters: Array<CoBlocks.Model.ParameterDefinition>);
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class Input {
            readonly name: string;
            readonly parent: CoBlocks.Model.InputContainer;
            readonly kind: CoBlocks.Model.InputKind;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class InputBlock extends CoBlocks.Model.Block {
            readonly container: CoBlocks.Model.BlockInput;
            readonly parentStatement: CoBlocks.Model.StatementLikeBlock;
            readonly isShadow: boolean;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class InputContainer {
            getInputs(): Array<CoBlocks.Model.Input>;
            getInput(name: string): CoBlocks.Model.Input;
            readonly parent: CoBlocks.Model.InputContainer;
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        type InputKind = 'statement' | 'fragments' | 'block' | 'field';
    }
}
declare namespace CoBlocks {
    namespace Model {
        class ParameterDefinition {
            readonly name: string;
            readonly type: CoBlocks.Model.Type;
            readonly function: CoBlocks.Model.FunctionDefinition;
            delete(): void;
            constructor(name: string, ts_type: CoBlocks.Model.Type);
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class StatementBlock extends CoBlocks.Model.StatementLikeBlock {
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        interface StatementBlockContainer {
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: 'statement_input' | 'script' | 'function';
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class StatementInput extends CoBlocks.Model.Input implements CoBlocks.Model.StatementBlockContainer {
            readonly parent: CoBlocks.Model.InputContainer;
            readonly statements: Array<CoBlocks.Model.StatementLikeBlock>;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock): void;
            addStatement(statement: CoBlocks.Model.StatementLikeBlock, index: number): void;
            remove(statement: CoBlocks.Model.StatementLikeBlock): void;
            remove(index: number): void;
            indexOf(statement: CoBlocks.Model.StatementLikeBlock): number;
            get(index: number): CoBlocks.Model.StatementLikeBlock;
            set(index: number, statement: CoBlocks.Model.StatementLikeBlock): void;
            readonly size: number;
            clear(): void;
            readonly containerKind: 'statement_input' | 'script' | 'function';
        }
    }
}
declare namespace CoBlocks {
    namespace Model {
        class StatementLikeBlock extends CoBlocks.Model.Block {
            removeFromContainer(): void;
            readonly isRootBlock: boolean;
            readonly indexInContainer: number;
            readonly container: CoBlocks.Model.StatementBlockContainer;
        }
    }
}
declare type GalleryCategory = 'stem' | 'social_sciences' | 'languages' | 'maker_space' | 'none';
declare class AnisotropicBaseItem extends AnisotropicPhongItem implements ComposableItem {
    union(other: ComposableItem): CsgItem;
    difference(other: ComposableItem): CsgItem;
    intersection(other: ComposableItem): CsgItem;
    split(): Array<ComposableItem>;
}
declare class AnisotropicItem extends AnisotropicBaseItem {
}
declare class AnisotropicPhongItem extends FigureItem {
    setTexture(id: string, ch: number): void;
    setTextureIds(ids: Array<string>): void;
    setTextureBlend(b: boolean): void;
    setBlendColors(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number): void;
    getTextureId(): string;
}
declare class BaseItem implements Disposable, PositionService {
    name: string;
    /**
     *@deprecated
     */
    setName(name: string): void;
    readonly id: string;
    isLocal(): boolean;
    /**
     *@deprecated
     */
    deleteFromScene(): void;
    delete(): void;
    /**
     *@deprecated
     */
    distanceTo(other: BaseItem): number;
    /**
     *@deprecated
     */
    distanceTo(point: Vector3): number;
    /**
     *@deprecated
     */
    getColor(): Array<number>;
    color: Color;
    /**
     *@deprecated
     */
    setColor(red: number, green: number, blue: number): void;
    /**
     *@deprecated
     */
    setColorFromString(color: string): void;
    /**
     *@deprecated
     */
    setColor(color: Color): void;
    /**
     *@deprecated
     */
    setHighlightColor(red: number, green: number, blue: number): void;
    addTag(tag: string): void;
    removeTag(tag: string): void;
    hasTag(tag: string): boolean;
    onCollisionEnter(handler: (((arg0: BaseItem) => void))): void;
    onCollisionExit(handler: (((arg0: BaseItem) => void))): void;
    /**
     *@deprecated
     */
    shapeCast(v: Vector3): number;
    /**
     *@deprecated
     */
    shapeCast(vx: number, vy: number, vz: number): number;
    /**
     *@deprecated
     */
    onButtonDown(handler: ((() => void))): void;
    /**
     *@deprecated
     */
    onButtonUp(handler: ((() => void))): void;
    /**
     *@deprecated
     */
    onActivate(handler: ((() => void))): void;
    /**
     *@deprecated
     */
    onHover(handler: (((arg0: boolean) => void))): void;
    /**
     *@deprecated
     */
    showInfoPanel(title: string, image: string, text: string, autoRemove: boolean): Disposable;
    /**
     *@deprecated
     */
    showInfoPanel(title: string, image: string, text: string, autoRemove: boolean, onHide: ((() => void))): Disposable;
    /**
     *@deprecated
     */
    focusOn(instant: boolean): Disposable;
    /**
     *@deprecated
     */
    focusOff(instant: boolean): void;
    removeFromParent(): void;
    /**
     *@deprecated
     */
    getCenter(): Vector3;
    readonly center: Vector3;
    /**
     *@deprecated
     */
    getSlotPosition(slot: string): Vector3;
    /**
     *@deprecated
     */
    getSlotTransform(slot: string): PositionService;
    add(obj: BaseItem): void;
    /**
     *@deprecated
     */
    adjustToItem(slot: string, obj: BaseItem, objSlot: string): boolean;
    /**
     *@deprecated
     */
    attachToItem(slot: string, obj: BaseItem, objSlot: string): void;
    /**
     *@deprecated
     */
    getChildrenCount(): number;
    /**
     *@deprecated
     */
    readonly childrenCount: number;
    /**
     *@deprecated
     */
    getChild(index: number): BaseItem;
    /**
     *@deprecated
     */
    getChild(name: string): BaseItem;
    deleteChildren(): void;
    /**
     *@deprecated
     */
    setScale(scale: number): void;
    /**
     *@deprecated
     */
    scale: number;
    /**
     *@deprecated
     */
    setScale(scale: number, slot: string): void;
    createCustomItem(basis: PositionService, script: string): BaseItem;
    speech: string | number;
    thought: string | number;
    /**
     *@deprecated
     */
    say(phrase: any): void;
    /**
     *@deprecated
     */
    think(phrase: any): void;
    log(): void;
    /**
     *@deprecated
     */
    showName(show: boolean): void;
    nameVisible: boolean;
    /**
     *@deprecated
     */
    isAnimated(): boolean;
    readonly animated: boolean;
    /**
     *@deprecated
     */
    setRandomColor(): void;
    copy(): BaseItem;
    useInCoBlocks: boolean;
    readonly model: Model;
    /**
     *@deprecated
     */
    addMoveOnPlaneInteraction(cx: number, cy: number, cz: number, vx: number, vy: number, vz: number, ux: number, uy: number, uz: number): void;
    /**
     *@deprecated
     */
    addMoveOnPlaneInteraction(cx: number, cy: number, cz: number, vx: number, vy: number, vz: number, ux: number, uy: number, uz: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addMoveOnSphereInteraction(): void;
    /**
     *@deprecated
     */
    addMoveOnSphereInteraction(callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addRotationAxisInteraction(ox: number, oy: number, oz: number, nx: number, ny: number, nz: number): void;
    /**
     *@deprecated
     */
    addRotationAxisInteraction(ox: number, oy: number, oz: number, nx: number, ny: number, nz: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addRotation3dInteraction(): void;
    /**
     *@deprecated
     */
    addRotation3dInteraction(callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addConstantRotationInteraction(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, speed: number): void;
    /**
     *@deprecated
     */
    addConstantRotationInteraction(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, speed: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addMoveCollisionInteraction(): void;
    /**
     *@deprecated
     */
    addMoveCollisionInteraction(callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addMoveCollisionConstraintInteraction(obj: BaseItem): void;
    /**
     *@deprecated
     */
    addMoveCollisionConstraintInteraction(obj: BaseItem, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    addMoveOnItemInteraction(obj: BaseItem): void;
    /**
     *@deprecated
     */
    addMoveOnItemInteraction(obj: BaseItem, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    removeInteraction(): void;
    /**
     *@deprecated
     */
    move(dx: number, dy: number): void;
    /**
     *@deprecated
     */
    move(dx: number, dy: number, dz: number): void;
    /**
     *@deprecated
     */
    move(dx: number, dy: number, dz: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    moveTo(x: number, y: number): void;
    /**
     *@deprecated
     */
    moveTo(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    moveTo(x: number, y: number, z: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    faceTo(obj: PositionService): void;
    /**
     *@deprecated
     */
    faceToPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    moveToItem(obj: BaseItem, distance: number): void;
    /**
     *@deprecated
     */
    moveToItem(obj: BaseItem, distance: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    moveBezierTo(x: number, y: number, z: number, time: number): void;
    /**
     *@deprecated
     */
    moveBezierTo(x: number, y: number, z: number, time: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    moveBezierToObj(obj: BaseItem, slot: string, time: number): void;
    /**
     *@deprecated
     */
    moveBezierToObj(obj: BaseItem, slot: string, time: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    moveLinear(x: number, y: number, z: number, t: number): Tweener;
    /**
     *@deprecated
     */
    moveLinearTo(x: number, y: number, z: number, t: number): Tweener;
    /**
     *@deprecated
     */
    moveLinear(x: number, y: number, z: number, t: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    moveLinearTo(x: number, y: number, z: number, t: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    moveLinearLocal(x: number, y: number, z: number, t: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    moveOnPath(options: {
        readonly path: PathItem;
        readonly reverse?: boolean;
        readonly startPoint?: number;
        readonly endPoint?: number;
        readonly speed?: number;
        readonly time?: number;
        readonly turnWithPath?: boolean;
        readonly repeat?: boolean;
        readonly callback?: ((() => void));
    }): void;
    /**
     *@deprecated
     */
    moveOnPath(path: PathItem, startPoint: number, endPoint: number, time: number, repeat: boolean, reverse: boolean, orientAlongPath: boolean, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    rotateLocalAroundOrigin(dirX: number, dirY: number, dirZ: number, radians: number, time: number): void;
    /**
     *@deprecated
     */
    rotateLocal(dirX: number, dirY: number, dirZ: number, radians: number, time: number): void;
    /**
     *@deprecated
     */
    rotateLocal(dirX: number, dirY: number, dirZ: number, radians: number, time: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    rotateLocal(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number, time: number): void;
    /**
     *@deprecated
     */
    rotateLocalAroundOrigin(dirX: number, dirY: number, dirZ: number, radians: number, time: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    rotateLocal(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number, time: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    rotate(originX: number, originY: number, originZ: number, origGlobal: boolean, dirX: number, dirY: number, dirZ: number, dirGlobal: boolean, radians: number, time: number, callback: ((() => void))): Tweener;
    /**
     *@deprecated
     */
    turn(r: number, angle: number, time: number, clockwise: boolean): void;
    /**
     *@deprecated
     */
    turn(r: number, angle: number, time: number, clockwise: boolean, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    readonly velocity: Vector3;
    /**
     *@deprecated
     */
    setPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    setPosition(pos: Vector3): void;
    /**
     *@deprecated
     */
    position: Vector3;
    /**
     *@deprecated
     */
    setPosition(x: number, y: number, z: number, slot: string): void;
    setPosition(x: number, y: number, z: number, discrete: boolean): void;
    /**
     *@deprecated
     */
    setPositionQuat(x: number, y: number, z: number, qx: number, qy: number, qz: number, qw: number): void;
    /**
     *@deprecated
     */
    setPositionAngle(x: number, y: number, z: number, axisX: number, axisY: number, axisZ: number, angle: number): void;
    /**
     *@deprecated
     */
    setHorizontalDirection(dirX: number, dirY: number): void;
    /**
     *@deprecated
     */
    setHorizontalDirection(dirX: number, dirY: number, discrete: boolean): void;
    /**
     *@deprecated
     */
    setDirection(dirX: number, dirY: number, dirZ: number): void;
    /**
     *@deprecated
     */
    addRotation(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number): void;
    /**
     *@deprecated
     */
    addLocalRotationAround(dirX: number, dirY: number, dirZ: number, radians: number): void;
    /**
     *@deprecated
     */
    addLocalRotationAround(dirX: number, dirY: number, dirZ: number, radians: number, slot: string): void;
    /**
     *@deprecated
     */
    addLocalRotation(originX: number, originY: number, originZ: number, dirX: number, dirY: number, dirZ: number, radians: number): void;
    /**
     *@deprecated
     */
    addLocalPosition(dx: number, dy: number, dz: number): void;
    /**
     *@deprecated
     */
    setRelativeToCamera(x: number, y: number, z: number, qx: number, qy: number, qz: number, qw: number): void;
    /**
     *@deprecated
     */
    shiftPhysicsPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    setPhysicsPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    shiftPhysicsPositionLocal(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    setPhysicsGroupPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    shiftPhysicsGroupPosition(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    shiftPhysicsGroupPositionLocal(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    getPhysicsGroupPosition(): Vector3;
    /**
     *@deprecated
     */
    readonly physicsGroupPosition: Vector3;
    /**
     *@deprecated
     */
    rotateLocal(axis: Vector3, angle: number): void;
    /**
     *@deprecated
     */
    rotatePhysicsBodyLocal(axisX: number, axisY: number, axisZ: number, angle: number): void;
    /**
     *@deprecated
     */
    setVelocity(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    setVelocityLocal(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    getGroupVelocityLocal(): Vector3;
    /**
     *@deprecated
     */
    setGroupVelocityLocal(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    getAngularVelocity(): Vector3;
    /**
     *@deprecated
     */
    setAngularVelocity(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    getAngularVelocityLocal(): Vector3;
    /**
     *@deprecated
     */
    setAngularVelocityLocal(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    getGroupAngularVelocityLocal(): Vector3;
    /**
     *@deprecated
     */
    setGroupAngularVelocityLocal(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    getDensity(): number;
    /**
     *@deprecated
     */
    setDensity(density: number): void;
    /**
     *@deprecated
     */
    setGroupDensity(density: number): void;
    /**
     *@deprecated
     */
    getMass(): number;
    /**
     *@deprecated
     */
    setMass(m: number): void;
    /**
     *@deprecated
     */
    getModelMass(): number;
    /**
     *@deprecated
     */
    setModelMass(m: number): void;
    /**
     *@deprecated
     */
    setModelDensity(density: number): void;
    /**
     *@deprecated
     */
    getGroupMass(): number;
    /**
     *@deprecated
     */
    setGroupMass(m: number): void;
    /**
     *@deprecated
     */
    isStatic(): boolean;
    /**
     *@deprecated
     */
    setStatic(): void;
    /**
     *@deprecated
     */
    setStatic(enabled: boolean): void;
    /**
     *@deprecated
     */
    setModelStatic(enabled: boolean): void;
    /**
     *@deprecated
     */
    isCCD(): boolean;
    /**
     *@deprecated
     */
    setCCD(enabled: boolean): void;
    /**
     *@deprecated
     */
    setLayer(layer: number): void;
    /**
     *@deprecated
     */
    setGroupLayer(layer: number): void;
    /**
     *@deprecated
     */
    setFriction(friction: number): void;
    /**
     *@deprecated
     */
    setSoftness(s: number): void;
    /**
     *@deprecated
     */
    setModelFriction(friction: number): void;
    /**
     *@deprecated
     */
    restrictMovementAxis(x: boolean, y: boolean, z: boolean): void;
    /**
     *@deprecated
     */
    restrictRotationAxis(x: boolean, y: boolean, z: boolean): void;
    /**
     *@deprecated
     */
    setPhysicsPositionCorrection(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    addToPhysicsCollisionFilter(item: BaseItem): void;
    /**
     *@deprecated
     */
    distanceConstraint(item: BaseItem, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, dist: number): DistanceConstraint;
    /**
     *@deprecated
     */
    attractorConstraint(item: BaseItem, strength: number, maxRad: number): Disposable;
    /**
     *@deprecated
     */
    positionConstraint(x: number, y: number, z: number): PositionConstraint;
    /**
     *@deprecated
     */
    rotationConstraint(qx: number, qy: number, qz: number, qw: number): RotationConstraint;
    /**
     *@deprecated
     */
    jointToItem(other: BaseItem, x: number, y: number, z: number): JointConstraint;
    /**
     *@deprecated
     */
    hingeJointToItem(other: BaseItem, localAnchorAx: number, localAnchorAy: number, localAnchorAz: number, localAnchorBx: number, localAnchorBy: number, localAnchorBz: number, localAxisAx: number, localAxisAy: number, localAxisAz: number, localAxisBx: number, localAxisBy: number, localAxisBz: number): HingeJointConstraint;
    /**
     *@deprecated
     */
    motorJointToItem(other: BaseItem, localAnchorAx: number, localAnchorAy: number, localAnchorAz: number, localAnchorBx: number, localAnchorBy: number, localAnchorBz: number, localAxisAx: number, localAxisAy: number, localAxisAz: number, localAxisBx: number, localAxisBy: number, localAxisBz: number): MotorJointConstraint;
    /**
     *@deprecated
     */
    jointToGround(x: number, y: number, z: number): JointConstraint;
    /**
     *@deprecated
     */
    planeConstraint(axisX: number, axisY: number, axisZ: number): PlaneConstraint;
    /**
     *@deprecated
     */
    sliderConstraint(axisX: number, axisY: number, axisZ: number): SliderConstraint;
    /**
     *@deprecated
     */
    rotationAxisConstraint(axisX: number, axisY: number, axisZ: number): RotationAxisConstraint;
    /**
     *@deprecated
     */
    gearConstraint(other: BaseItem, localAxisAx: number, localAxisAy: number, localAxisAz: number, localAxisBx: number, localAxisBy: number, localAxisBz: number, gearRatio: number): GearConstraint;
    /**
     *@deprecated
     */
    applyImpulseLocal(x: number, y: number, z: number, impX: number, impY: number, impZ: number): void;
    /**
     *@deprecated
     */
    applyForce(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    setForce(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    setGroupForce(x: number, y: number, z: number): void;
    /**
     *@deprecated
     */
    onPhysicsCollisionEnter(handler: (((arg0: BaseItem) => void))): Disposable;
    /**
     *@deprecated
     */
    onPhysicsCollisionExit(handler: (((arg0: BaseItem) => void))): Disposable;
    /**
     *@deprecated
     */
    onCollision(handlerEnter: (((arg0: BaseItem) => void)), handlerExit: (((arg0: BaseItem) => void))): void;
    /**
     *@deprecated
     */
    onPhysicsCollision(handlerEnter: (((arg0: BaseItem) => void)), handlerExit: (((arg0: BaseItem) => void))): Disposable;
    /**
     *@deprecated
     */
    isInGroup(): boolean;
    /**
     *@deprecated
     */
    makeSynchronized(): void;
    /**
     *@deprecated
     */
    requestAuthority(): void;
    setProperty(key: string, value: any): void;
    getProperty(key: string): string;
    onPropertyChanged(id: string, handler: (((arg0: string) => void))): void;
    opacity: number;
    /**
     *@deprecated
     */
    setOpacity(opacity: number): void;
    active: boolean;
    /**
     *@deprecated
     */
    setVisible(visible: boolean): void;
    visible: boolean;
    /**
     *@deprecated
     */
    isHighlighted(): boolean;
    /**
     *@deprecated
     */
    setHighlighted(highlighted: boolean): void;
    /**
     *@deprecated
     */
    setHighlighted(headlight: boolean, glow: boolean): void;
    /**
     *@deprecated
     */
    isHighlightedWithHeadlight(): boolean;
    /**
     *@deprecated
     */
    isHighlightedWithGlow(): boolean;
    /**
     *@deprecated
     */
    setHighlightIntensity(intensity: number): void;
    /**
     *@deprecated
     */
    setHighlightAmbient(ambient: number): void;
    /**
     *@deprecated
     */
    setHighlightFrequency(frequency: number): void;
    /**
     *@deprecated
     */
    setHighlightAmplitude(amplitude: number): void;
    readonly parent: BaseItem;
    /**
     *@deprecated
     */
    getLocalPosition(): Vector3;
    /**
     *@deprecated
     */
    localPosition: Vector3;
    /**
     *@deprecated
     */
    setLocalPosition(pos: Vector3): void;
    setShadowPower(value: number): void;
    readonly slots: Array<Slot>;
    getSlot(name: string): Slot;
    readonly parentSlot: Slot;
    /**
     *@deprecated
     */
    setPhysicsEnabled(added: boolean): void;
    locked: boolean;
    setHole(b: boolean): void;
    readonly children: ItemCollection;
    readonly syncedProperties: {
        readonly color: ReadableProperty<Color>;
        readonly opacity: ReadableProperty<number>;
        readonly coloredParts: ReadableProperty<Array<ColoredPart>>;
        readonly animation: ReadableProperty<string>;
        readonly position: ReadableProperty<Vector3>;
        readonly rotation: ReadableProperty<Quat>;
        readonly scale: ReadableProperty<number>;
        readonly transform: ReadableProperty<ReadonlyTransform>;
    };
    /**
     *@deprecated
     */
    hasPhysicsBody(): boolean;
    onLoaded(handler: ((() => void))): Disposable;
    /**
     *@deprecated
     */
    getPart(key: string): BaseItem;
    /**
     *@deprecated
     */
    setPartName(name: string): void;
    partName: string;
    readonly transform: Transform;
    readonly relativeTransform: Transform;
    getVolume(): number;
    dispose(): void;
    /**
     *@deprecated
     */
    getPosition(): Vector3;
    /**
     *@deprecated
     */
    getAxisX(): Vector3;
    /**
     *@deprecated
     */
    readonly axisX: Vector3;
    /**
     *@deprecated
     */
    getAxisY(): Vector3;
    /**
     *@deprecated
     */
    readonly axisY: Vector3;
    /**
     *@deprecated
     */
    getAxisZ(): Vector3;
    /**
     *@deprecated
     */
    readonly axisZ: Vector3;
    /**
     *@deprecated
     */
    getOrientationQuat(): Quat;
    /**
     *@deprecated
     */
    readonly orientationQuat: Quat;
    /**
     *@deprecated
     */
    distanceToItem(other: BaseItem): number;
    /**
     *@deprecated
     */
    distanceToPoint(x: number, y: number, z: number): number;
    /**
     *@deprecated
     */
    distanceToPoint(point: Vector3): number;
    readonly highlight: {
        color: Color;
        enabled: boolean;
        type: 'default' | 'light' | 'outline' | 'inherited';
        intensity: number;
        ambient: number;
        frequency: number;
        amplitude: number;
    };
    readonly input: {
        onButtonDown(handler: ((() => void))): void;
        onButtonUp(handler: ((() => void))): void;
        /**
         *@deprecated
         */
        onActivate(handler: ((() => void))): void;
        onClick(handler: ((() => void))): void;
        onHover(handler: (((arg0: boolean) => void))): void;
        setPlaneDrag(c: Vector3, v: Vector3, u: Vector3): void;
        setPlaneDrag(c: Vector3, v: Vector3, u: Vector3, callback: ((() => void))): void;
        setSphereDrag(): void;
        setSphereDrag(callback: ((() => void))): void;
        setRotationAxisDrag(origin: Vector3, direction: Vector3): void;
        setRotationAxisDrag(origin: Vector3, direction: Vector3, callback: ((() => void))): void;
        setRotationDrag(): void;
        setRotationDrag(callback: ((() => void))): void;
        setRotationContinuousDrag(origin: Vector3, direction: Vector3, speed: number): void;
        setRotationContinuousDrag(origin: Vector3, direction: Vector3, speed: number, callback: ((() => void))): void;
        setCollisionDrag(): void;
        setCollisionDrag(callback: ((() => void))): void;
        setItemDrag(target: BaseItem): void;
        setItemDrag(target: BaseItem, callback: ((() => void))): void;
        /**
         *@deprecated
         */
        setSurfaceDrag(item: BaseItem): void;
        /**
         *@deprecated
         */
        setSurfaceDrag(item: BaseItem, callback: ((() => void))): void;
        removeDrag(): void;
        onSelected(handler: ((() => void))): void;
        onDeselected(handler: ((() => void))): void;
        onDragStart(handler: ((() => void))): void;
        onDragEnd(handler: ((() => void))): void;
    };
    readonly transition: {
        scaleTo(startValue: number, endValue: number, duration: number): Tweener;
        colorTo(startColor: Color, endColor: Color, duration: number): Tweener;
        opacityTo(target: number, duration: number): Tweener;
        opacityTo(target: number, duration: number, callback: ((() => void))): Tweener;
        moveByForever(direction: Vector3, speed: number): void;
        moveTo(target: Vector3, duration: number): Tweener;
        moveTo(target: Vector3, duration: number, callback: ((() => void))): Tweener;
        /**
         *@deprecated
         */
        moveLinear(target: Vector3, time: number): Tweener;
        /**
         *@deprecated
         */
        moveLinear(target: Vector3, time: number, callback: ((() => void))): Tweener;
        moveBy(target: Vector3, duration: number): Tweener;
        moveBy(target: Vector3, duration: number, callback: ((() => void))): Tweener;
        /**
         *@deprecated
         */
        moveLinearLocal(target: Vector3, t: number): Tweener;
        /**
         *@deprecated
         */
        moveLinearLocal(target: Vector3, t: number, callback: ((() => void))): Tweener;
        moveOnPath(options: {
            readonly path: PathItem;
            readonly reverse?: boolean;
            readonly startPoint?: number;
            readonly endPoint?: number;
            readonly speed?: number;
            readonly time?: number;
            readonly turnWithPath?: boolean;
            readonly repeat?: boolean;
            readonly callback?: ((() => void));
        }): Tweener;
        rotateLocalForever(axis: Vector3, time: number, counterClockwise: boolean): Tweener;
        lookAt(target: Vector3, duration: number): Tweener;
        lookAt(target: Vector3, duration: number, callback: ((() => void))): Tweener;
        lookAt(target: Vector3, duration: number, worldUp: Vector3): Tweener;
        lookAt(target: Vector3, duration: number, worldUp: Vector3, callback: ((() => void))): Tweener;
        rotateLocal(axis: Vector3, angleInRadians: number, duration: number): Tweener;
        rotateLocal(axis: Vector3, angleInRadians: number, duration: number, callback: ((() => void))): Tweener;
        rotateLocal(offset: Vector3, axis: Vector3, angleInRadians: number, duration: number): Tweener;
        rotateLocal(offset: Vector3, axis: Vector3, angleInRadians: number, duration: number, callback: ((() => void))): Tweener;
        rotate(origin: Vector3, origGlobal: boolean, axis: Vector3, axisGlobal: boolean, radians: number, time: number): Tweener;
        rotate(origin: Vector3, origGlobal: boolean, axis: Vector3, axisGlobal: boolean, radians: number, time: number, callback: ((() => void))): Tweener;
        turn(r: number, angle: number, time: number, clockwise: boolean): void;
        turn(r: number, angle: number, time: number, clockwise: boolean, callback: ((() => void))): void;
        readonly velocity: Vector3;
        stop(): void;
        /**
         *@deprecated
         */
        rotateLocalAroundOrigin(axis: Vector3, angle: number, time: number): Tweener;
        /**
         *@deprecated
         */
        rotateLocalAroundOrigin(axis: Vector3, angle: number, time: number, callback: ((() => void))): Tweener;
        rotateLocalTo(rotation: Quat, duration: number): Tweener;
        rotateLocalTo(rotation: Quat, duration: number, callback: ((() => void))): Tweener;
    };
    readonly physics: {
        shiftPosition(shift: Vector3): void;
        position: Vector3;
        shiftPositionLocal(offset: Vector3): void;
        velocity: Vector3;
        velocityLocal: Vector3;
        angularVelocity: Vector3;
        angularVelocityLocal: Vector3;
        density: number;
        mass: number;
        modelMass: number;
        modelDensity: number;
        static: boolean;
        continuousCollisionDetection: boolean;
        layer: number;
        friction: number;
        softness: number;
        modelFriction: number;
        restitution: number;
        modelRestitution: number;
        restrictMovementAxis(axes: {
            readonly x?: boolean;
            readonly y?: boolean;
            readonly z?: boolean;
        }): void;
        restrictRotationAxis(axes: {
            readonly x?: boolean;
            readonly y?: boolean;
            readonly z?: boolean;
        }): void;
        positionCorrection: Vector3;
        enabled: boolean;
        modelPreciseCollision: boolean;
        preciseCollision: boolean;
        addToCollisionFilter(item: BaseItem): void;
        removeFromCollisionFilter(item: BaseItem): void;
        distanceConstraint(options: {
            readonly other: BaseItem;
            readonly thisLocalAnchor?: Vector3;
            readonly otherLocalAnchor?: Vector3;
            readonly distance: number;
        }): DistanceConstraint;
        attractorConstraint(options: {
            readonly other: BaseItem;
            readonly strength: number;
            readonly maxRadius: number;
        }): Disposable;
        positionConstraint(worldPos: Vector3): PositionConstraint;
        rotationConstraint(quat: Quat): RotationConstraint;
        jointTo(other: BaseItem, worldAnchorPos: Vector3): JointConstraint;
        hingeJointTo(options: {
            readonly other: BaseItem;
            readonly thisLocalAnchor?: Vector3;
            readonly otherLocalAnchor?: Vector3;
            readonly thisLocalAxis?: Vector3;
            readonly otherLocalAxis?: Vector3;
        }): HingeJointConstraint;
        motorJointTo(options: {
            readonly other: BaseItem;
            readonly thisLocalAnchor: Vector3;
            readonly otherLocalAnchor: Vector3;
            readonly thisLocalAxis: Vector3;
            readonly otherLocalAxis: Vector3;
        }): MotorJointConstraint;
        jointToGround(worldAnchorPos: Vector3): JointConstraint;
        planeConstraint(worldAxis: Vector3): PlaneConstraint;
        sliderConstraint(worldAxis: Vector3): SliderConstraint;
        rotationAxisConstraint(localAxis: Vector3): RotationAxisConstraint;
        gearConstraint(options: {
            readonly other: BaseItem;
            readonly thisLocalAxis: Vector3;
            readonly otherLocalAxis: Vector3;
            readonly ratio?: number;
        }): GearConstraint;
        curveHandlerConstraint(curveHandler: (((x: number, y: number, z: number) => {
            readonly x: number;
            readonly y: number;
            readonly z: number;
        })), curveRadius: number, bodyRadius: number): CurveConstraint;
        curveConstraint(curve: PathItem, curveRadius: number, bodyRadius: number): CurveConstraint;
        removeFromConstraints(): void;
        applyImpulse(origin: Vector3, impulse: Vector3): void;
        applyImpulseLocal(localOrigin: Vector3, impulse: Vector3): void;
        applyForce(force: Vector3): void;
        force: Vector3;
        onCollisionEnter(handler: (((arg0: BaseItem) => void))): void;
        onCollisionExit(handler: (((arg0: BaseItem) => void))): void;
        readonly isInGroup: boolean;
        readonly group: {
            position: Vector3;
            shiftPosition(offset: Vector3): void;
            shiftPositionLocal(offset: Vector3): void;
            velocityLocal: Vector3;
            angularVelocityLocal: Vector3;
            density: number;
            mass: number;
            static: boolean;
            layer: number;
            setFriction(friction: number): void;
            setRestitution(restitution: number): void;
            force: Vector3;
        };
    };
    readonly multiplayer: {
        makeSynchronized(): void;
        enablePropertySync(): void;
        requestAuthority(): void;
    };
    readonly bounds: {
        readonly center: Vector3;
        readonly extents: Vector3;
        readonly size: Vector3;
        fitIn(boundsVolume: Vector3): void;
        contains(point: Vector3): boolean;
        alignTo(other: BaseItem, alignment: 'center' | 'top' | 'bottom'): void;
    };
}
declare class ItemCollection implements ReadonlyList<BaseItem> {
    add(obj: BaseItem): boolean;
    toArray(): Array<BaseItem>;
    readonly [key: number]: BaseItem;
    readonly length: number;
    [Symbol.iterator](): Iterator<BaseItem>;
    readonly byName: {
        readonly [key: string]: BaseItem;
        readonly [key: number]: BaseItem;
    };
}
declare class CameraItem extends ServiceItem {
    movement: 'fly' | 'walk' | 'fixed_position' | 'fixed' | 'orbit' | 'editor' | 'pan_zoom';
    movementSpeed: number;
    projection: Camera.ProjectionMode;
    fieldOfView: number;
    orthographicSize: number;
    collision: boolean;
    create360Photo(): void;
}
declare class Capsule extends AnisotropicItem {
    setSize(radius: number, height: number): void;
    radius: number;
    /**
     *@deprecated
     */
    setRadius(r: number): void;
    height: number;
    /**
     *@deprecated
     */
    setHeight(h: number): void;
}
declare class ChartItem extends UnitItem {
    addCubicPoly2D(c0: number, v0: number, a0: number, w0: number, c1: number, v1: number, a1: number, w1: number): void;
    addCubicPoly(c: number, v: number, a: number, w: number, x0: number, x1: number): void;
    attachFunction(f: (((arg0: number) => number)), div: number): PathItem;
    attachFunction(fx: (((arg0: number) => number)), fy: (((arg0: number) => number)), fz: (((arg0: number) => number)), t0: number, t1: number, div: number): PathItem;
    attachFunction(fx: (((arg0: number) => number)), fy: (((arg0: number) => number)), fz: (((arg0: number) => number)), t0: number, t1: number, div: number, spline: boolean): PathItem;
    setThickness(t: number): void;
}
declare class ConeFrustum extends AnisotropicItem {
    /**
     *@deprecated
     */
    setSize(radiusBottom: number, radiusTop: number, height: number): void;
    /**
     *@deprecated
     */
    setBottomRadius(bottomRadius: number): void;
    bottomRadius: number;
    /**
     *@deprecated
     */
    setTopRadius(topRadius: number): void;
    topRadius: number;
    /**
     *@deprecated
     */
    setHeight(height: number): void;
    height: number;
}
declare class Cone extends AnisotropicItem {
    /**
     *@deprecated
     */
    setSize(radius: number, height: number): void;
    /**
     *@deprecated
     */
    setRadius(radius: number): void;
    radius: number;
    /**
     *@deprecated
     */
    setHeight(height: number): void;
    height: number;
}
declare class CustomItem extends BaseItem {
}
declare class Cylinder extends AnisotropicItem {
    /**
     *@deprecated
     */
    setSize(radiusX: number, radiusY: number, height: number): void;
    /**
     *@deprecated
     */
    setRadiusX(radiusX: number): void;
    radiusX: number;
    /**
     *@deprecated
     */
    setRadiusY(radiusY: number): void;
    radiusY: number;
    /**
     *@deprecated
     */
    setHeight(height: number): void;
    height: number;
}
declare class DirLightItem extends LightItem {
    shadowMapWidth: number;
}
declare class Ellipsoid extends EllipsoidItemBase {
}
declare class EllipsoidItemBase extends AnisotropicItem {
    setSize(rx: number, ry: number, rz: number): void;
    /**
     *@deprecated
     */
    setRadiusX(r: number): void;
    radiusX: number;
    /**
     *@deprecated
     */
    setRadiusY(r: number): void;
    radiusY: number;
    /**
     *@deprecated
     */
    setRadiusZ(r: number): void;
    radiusZ: number;
}
declare class ExtrudeItem extends Vertices2DItem {
    rebuildHoles(): void;
    /**
     *@deprecated
     */
    getHeight(): number;
    height: number;
    /**
     *@deprecated
     */
    setHeight(value: number): void;
}
declare class FigureItem extends UnitItem {
    phongParameters: __PhongParameters;
    /**
     *@deprecated
     */
    setPhongParameters(dLevel: number, dPower: number, sLevel: number, sPower: number): void;
    readonly modelId: string;
    /**
     *@deprecated
     */
    setMasking(isMask: boolean): void;
    masking: boolean;
    /**
     *@deprecated
     */
    isMasking(): boolean;
}
declare class FlatLineItem extends Vertices2DItem {
    setHeight(h: number): void;
    getHeight(): number;
}
declare class Cuboid extends AnisotropicItem {
    length: number;
    /**
     *@deprecated
     */
    setLength(length: number): void;
    width: number;
    /**
     *@deprecated
     */
    setWidth(width: number): void;
    height: number;
    /**
     *@deprecated
     */
    setHeight(height: number): void;
    /**
     *@deprecated
     */
    setText(text: any): void;
    /**
     *@deprecated
     */
    text: any;
    /**
     *@deprecated
     */
    setTextColor(red: number, green: number, blue: number): void;
    /**
     *@deprecated
     */
    setFontSize(value: number): void;
    setSize(sx: number, sy: number, sz: number): void;
}
declare class FlexWallItem extends VerticesItem {
    setWidth(w: number): void;
}
declare class FoliageItem extends BaseItem {
    clear(): void;
    windParameters: WindParameters;
}
declare class FractalItem extends GameItem {
    setGrowth(growth: number): void;
    setOrder(order: number): void;
    setTextureType(ts_type: number): void;
    setType(ts_type: number): void;
    setSeed(seed: number): void;
    setColorType(colorType: number): void;
    setLimbsColor(red: number, green: number, blue: number): void;
    setLeafsColor(red: number, green: number, blue: number): void;
}
declare class Frustum4Item extends AnisotropicItem {
    setSize(botX: number, botY: number, topX: number, topY: number, h: number): void;
    height: number;
    /**
     *@deprecated
     */
    setHeight(height: number): void;
    bottomLength: number;
    bottomWidth: number;
    topLength: number;
    topWidth: number;
}
declare class Frustum extends AnisotropicBaseItem {
    setSize(bottomRadiusX: number, topRadiusX: number, ratio: number, height: number): void;
    bottomRadiusX: number;
    bottomRadiusY: number;
    topRadiusX: number;
    topRadiusY: number;
    readonly ratio: number;
    vertices: number;
    /**
     *@deprecated
     */
    setHeight(height: number): void;
    height: number;
    setVertices(v: number): void;
}
declare class GameItem extends BaseItem {
    /**
     *@deprecated
     */
    setInverseMasking(b: boolean): void;
    /**
     *@deprecated
     */
    setInverseMaskLayer(layer: number): void;
    /**
     *@deprecated
     */
    setInverseMasking(isMask: boolean, layer: number): void;
    /**
     *@deprecated
     */
    removeInverseMask(): void;
    /**
     *@deprecated
     */
    addToInverseMask(layer: number): void;
    /**
     *@deprecated
     */
    removeFromInverseMask(): void;
    readonly inverseMasking: {
        enabled: boolean;
        isMask: boolean;
        layer: number;
    };
}
declare class Group extends BaseItem {
    setOrientationFrom(obj: BaseItem): void;
    ungroup(): void;
    setPivot(obj: BaseItem, slot: string): void;
}
declare class HelicopterItem extends AnimatedItem {
    startHelicopter(): void;
    stopHelicopter(): void;
}
declare class HemiEllipsoid extends EllipsoidItemBase {
}
declare class LakeItem extends GameItem {
    setSpline(b: boolean): void;
    setConstColor(b: boolean): void;
    fixPosition(): void;
    addVertex(x: number, y: number): void;
    clearVertices(): void;
    addVertex(position: Vector3): void;
    setShoreColor(red: number, green: number, blue: number): void;
}
declare class LightItem extends ServiceItem {
    intensity: number;
    shadowStrength: number;
    shadow: boolean;
    shadowType: 'TAP_1' | 'PCF_2x2' | 'PCF_4x4' | 'PCF_6x6';
    readonly shadowResolution: number;
    addToLightReceiveFilter(item: BaseItem): boolean;
    removeFromLightReceiveFilter(item: BaseItem): boolean;
    addToShadowCastFilter(item: BaseItem): void;
    removeFromShadowCastFilter(item: BaseItem): void;
}
declare class MengerSponge4Item extends GameItem {
    setLevel(level: number): void;
    getLevel(): number;
}
declare class MergeCubeItem extends AnisotropicBaseItem {
    setInsideVisible(inside: boolean): void;
    readonly visibleSide: AR.MergeCubeSide;
    onRotationGesture(handler: ((() => void)), direction: AR.RotationDirection): void;
}
declare class AnimatedItem extends FigureItem {
    /**
     *@deprecated
     */
    playAnimation(track: string): void;
    /**
     *@deprecated
     */
    playAnimation(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playAnimationNT(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playAnimationQueued(track: string): void;
    /**
     *@deprecated
     */
    playAnimationQueued(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playAnimationQueuedNT(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playLoopingAnimation(track: string): void;
    /**
     *@deprecated
     */
    playLoopingAnimation(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playLoopingAnimationNT(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playLoopingAnimationPingpong(track: string): void;
    /**
     *@deprecated
     */
    playLoopingAnimationPingpong(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    playLoopingAnimationPingpongNT(track: string, startTime: number, endTime: number): void;
    /**
     *@deprecated
     */
    animateToState(state: string): void;
    /**
     *@deprecated
     */
    animateToState(state: string, trackTime: number): void;
    /**
     *@deprecated
     */
    animateToStateNT(state: string, trackTime: number): void;
    /**
     *@deprecated
     */
    setAnimationState(state: string): void;
    /**
     *@deprecated
     */
    setAnimationState(state: string, trackTime: number): void;
    /**
     *@deprecated
     */
    setAnimationStateNT(state: string, trackTime: number): void;
    /**
     *@deprecated
     */
    stopAnimation(): void;
    /**
     *@deprecated
     */
    setAnimationSpeed(speed: number): void;
    /**
     *@deprecated
     */
    animationSpeed: number;
    /**
     *@deprecated
     */
    useNormalizedTime: boolean;
    /**
     *@deprecated
     */
    transitionTime: number;
    /**
     *@deprecated
     */
    onAnimationTime(time: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    onAnimationNT(time: number, callback: ((() => void))): void;
    /**
     *@deprecated
     */
    isAnimationPlaying(): boolean;
    /**
     *@deprecated
     */
    getAnimationTime(): number;
    /**
     *@deprecated
     */
    readonly animationTime: number;
    /**
     *@deprecated
     */
    getAnimationNT(): number;
    /**
     *@deprecated
     */
    readonly animationNT: number;
    /**
     *@deprecated
     */
    getAnimationName(): string;
    /**
     *@deprecated
     */
    readonly animationName: string;
    /**
     *@deprecated
     */
    getAnimationLength(): number;
    /**
     *@deprecated
     */
    readonly animationLength: number;
    /**
     *@deprecated
     */
    onFinishAnimation(callback: ((() => void))): void;
    /**
     *@deprecated
     */
    setModelId(modelId: string): void;
    modelId: string;
    setTextureMapping(mapping: Array<number>): void;
    getTextureMapping(): Array<number>;
    setTextureIds(ids: Array<string>): void;
    getTextureIds(): Array<string>;
    getTextureId(idx: number): string;
    setTextureId(idx: number, value: string): void;
    setVisibleParts(visibleList: Array<string>): void;
    getDefaultVisibleParts(): Array<string>;
    readonly defaultVisibleParts: Array<string>;
    readonly rootNode: ModelItemNode;
    getAllParts(): Array<string>;
    readonly allParts: Array<string>;
    setAlphaTest(enabled: boolean): void;
    readonly coloredParts: Array<ColoredPart>;
    readonly animation: {
        play(track: string): void;
        play(track: string, startTime: number, endTime: number): void;
        playQueued(track: string): void;
        playQueued(track: string, startTime: number, endTime: number): void;
        playLooping(track: string): void;
        playLooping(track: string, startTime: number, endTime: number): void;
        playLoopingPingpong(track: string): void;
        playLoopingPingpong(track: string, startTime: number, endTime: number): void;
        setState(state: string): void;
        setState(state: string, trackTime: number): void;
        stop(): void;
        speed: number;
        useNormalizedTime: boolean;
        transitionTime: number;
        onTrackTime(time: number, callback: ((() => void))): void;
        readonly isPlaying: boolean;
        readonly time: number;
        readonly name: string;
        readonly length: number;
        readonly tracks: Array<string>;
        readonly categories: Array<AnimationCategory>;
        onFinish(callback: ((() => void))): void;
        addCustomAnimation(animationFileId: string, sourceFileId: string): void;
    };
}
declare class ParticleItem extends BaseItem {
    setEmitRate(rate: number): void;
    pause(): void;
    start(): void;
    clear(): void;
    reset(): void;
    isEmitting(): boolean;
    setSize1(s1: number): void;
    setSize2(s2: number): void;
    setFireRadius(r: number): void;
}
declare class PathItem extends VerticesItem {
    spline: boolean;
    /**
     *@deprecated
     */
    setSpline(b: boolean): void;
    setLook(ts_type: number): void;
    /**
     *@deprecated
     */
    setThickness(thickness: number): void;
    thickness: number;
    getNearestPoint(other: BaseItem): number;
    getLength(t: number): number;
    readonly length: number;
    getPositionAt(l: number): Vector3;
    makeCircle(): void;
    addPathVertexFromSerializedPQS(s: string): ServiceItem;
}
declare class PlanetItem extends AnimatedItem {
    setToSunDir(x: number, y: number, z: number): void;
    setToSunDir(dir: Vector3): void;
}
declare class PointLightItem extends LightItem {
    radius: number;
}
declare class RoadItem extends FlexWallItem {
    setStandardMarkUp(lineIndex: number, lines: number, dotted: boolean, adjust: number, thick: number, dimX: number, dimY: number, dimZ: number, r: number, g: number, b: number): void;
    setDottedMarkUp(index: number, lineIndex: number, thick: number, dimX: number, dimY: number): void;
    setDoubleMarkUp(index: number, lineIndex: number, thick: number, adjust: number, dimZ: number): void;
    setMarkUp(index: number, lineIndex: number, lines: number, dotted: boolean, adjust: number, thick: number, dimX: number, dimY: number, dimZ: number): void;
}
declare class Slot {
    adjustTo(target: Slot): boolean;
    attachTo(target: Slot): void;
    readonly owner: BaseItem;
    readonly name: string;
    readonly transform: ReadonlyTransform;
    readonly relativeTransform: ReadonlyTransform;
}
declare class SemiTorus extends TorusItemBase {
}
declare class ServiceItem extends GameItem {
}
declare class SoundItem extends ServiceItem {
    play(): void;
    play(looping: boolean): void;
    /**
     *@deprecated
     */
    stopSound(): void;
    stop(): void;
    pause(): void;
    resume(): void;
    readonly duration: number;
    currentPosition: number;
    volume: number;
    ambientVolume: number;
    looping: boolean;
    radius: number;
}
declare class SpotLightItem extends LightItem {
    fov: number;
    radius: number;
}
declare class StairsItem extends VerticesItem {
}
declare class Text3DItem extends AnisotropicItem {
    text: string;
}
declare class Torus extends TorusItemBase {
}
declare class TorusItemBase extends AnisotropicItem {
    arc: number;
    /**
     *@deprecated
     */
    setArc(angle: number): void;
    setSize(radius: number, tubeRadiusX: number, tubeRadiusZ: number, radians: number): void;
    /**
     *@deprecated
     */
    setRadius(radius: number): void;
    radius: number;
    /**
     *@deprecated
     */
    setTubeRadiusX(radius: number): void;
    tubeRadiusX: number;
    /**
     *@deprecated
     */
    setTubeRadiusZ(radius: number): void;
    tubeRadiusZ: number;
}
declare interface PositionService {
    /**
     *@deprecated
     */
    getPosition(): Vector3;
    /**
     *@deprecated
     */
    readonly position: Vector3;
    /**
     *@deprecated
     */
    getAxisX(): Vector3;
    /**
     *@deprecated
     */
    readonly axisX: Vector3;
    /**
     *@deprecated
     */
    getAxisY(): Vector3;
    /**
     *@deprecated
     */
    readonly axisY: Vector3;
    /**
     *@deprecated
     */
    getAxisZ(): Vector3;
    /**
     *@deprecated
     */
    readonly axisZ: Vector3;
    /**
     *@deprecated
     */
    getOrientationQuat(): Quat;
    /**
     *@deprecated
     */
    readonly orientationQuat: Quat;
    /**
     *@deprecated
     */
    distanceToItem(other: BaseItem): number;
    /**
     *@deprecated
     */
    distanceToPoint(x: number, y: number, z: number): number;
    /**
     *@deprecated
     */
    distanceToPoint(point: Vector3): number;
}
declare class TubeItem extends AnisotropicItem {
    setSize(outerRadius: number, innerRadius: number, height: number): void;
    setSize(outerRadius: number, innerRadius: number, height: number, arc: number): void;
    setArc(angle: number): void;
    getArc(): number;
    getHeight(): number;
    setHeight(h: number): void;
    getOuterRadius(): number;
    getInnerRadius(): number;
    setOuterRadius(s: number): void;
    setInnerRadius(s: number): void;
}
declare class UnitItem extends GameItem {
}
declare class VectorItem extends ServiceItem {
    orient(dirX: number, dirY: number, dirZ: number): void;
}
declare class Vertices2DItem extends AnisotropicPhongItem {
    addVertex(x: number, y: number): void;
    setSpline(b: boolean): void;
    setCircle(b: boolean): void;
    setType(ts_type: number): void;
    fixPosition(): void;
}
declare class VerticesItem extends AnisotropicPhongItem {
    buildExtrudeItem(): ExtrudeItem;
    buildExtrudeItemForTm(transform: Transform): ExtrudeItem;
    getVertex(index: number): VectorItem;
}
declare interface ComposableItem {
    union(other: ComposableItem): CsgItem;
    difference(other: ComposableItem): CsgItem;
    intersection(other: ComposableItem): CsgItem;
    split(): Array<ComposableItem>;
}
declare class CsgItem extends UnitItem implements ComposableItem {
    union(other: ComposableItem): CsgItem;
    difference(other: ComposableItem): CsgItem;
    intersection(other: ComposableItem): CsgItem;
    split(): Array<ComposableItem>;
}
declare class DrawingItem extends RenderOrderItem {
    /**
     *@deprecated
     */
    setSize(x: number, y: number): void;
    size: Vector2;
}
declare class GUIItem extends DrawingItem {
    readonly context: GUI.Context;
    isOverlay: boolean;
    constructor(textureSize: Vector2, position: Vector3);
}
declare class ImageItem extends MediaItem {
    imageId: string;
}
declare class MediaItem extends DrawingItem {
}
declare class RenderOrderItem extends UnitItem {
}
declare class TextItem extends DrawingItem {
    /**
     *@deprecated
     */
    setText(text: any): void;
    text: any;
    fontSize: number;
    /**
     *@deprecated
     */
    setFontSize(value: number): void;
    buildText3DItem(): Text3DItem;
}
declare class VideoItem extends MediaItem {
    play(): void;
    pause(): void;
    /**
     *@deprecated
     */
    resume(): void;
    /**
     *@deprecated
     */
    stopVideo(): void;
    stop(): void;
    looping: boolean;
    readonly playing: boolean;
    volume: number;
    currentPosition: number;
    readonly duration: number;
    videoId: string;
}
declare type SceneType = '3D' | '360' | 'MergeCube';
declare interface TextToSpeech extends Disposable {
    say(utterance: Utterance, callback: (((eventType: 'stop' | 'cancel' | 'error') => void))): void;
    say(utterance: Utterance): void;
    getVoices(): Array<Voice>;
    stop(): void;
    createUtterance(text: string): Utterance;
}
declare interface Utterance {
    setVoice(voice: Voice): void;
    setRate(rate: number): void;
    rate(): number;
}
declare interface Voice {
    readonly name: string;
    readonly lang: string;
    readonly variant: string;
    readonly local: boolean;
}
